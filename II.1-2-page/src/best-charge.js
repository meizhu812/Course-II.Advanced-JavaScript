const [idPriceMap, idNameMap] = loadAllItems().reduce((acc, cur) => {
  acc[0].set(cur.id, cur.price);
  acc[1].set(cur.id, cur.name);
  return acc;
}, [new Map(), new Map()]);

function bestCharge(selectedItems) {
  const [costDetails, fullCost] = selectedItems.reduce((acc, cur) => {
    let [id, count] = cur.split(" x ");
    let curItem = {
      id: id,
      name: idNameMap.get(id),
      price: idPriceMap.get(id),
      count: count
    };
    acc[0].push(curItem);
    acc[1] += curItem.price * curItem.count;
    return acc;
  }, [[], 0]);
  let [promoInfo, finalCost]
    = ["", fullCost];
  for (let promotion of loadPromotions()) {
    let promoDetails = promotion.getPromoDetails(fullCost, costDetails);
    if (promoDetails.cost < finalCost) {
      finalCost = promoDetails.cost;
      promoInfo = promoDetails.info;
    }
  }
  return renderDetails(costDetails) + (promoInfo ? renderPromo(promoInfo) : "") + renderFooter(finalCost);
}

function renderDetails(details) {
  let detailsString = "============= 订餐明细 =============\n";
  for (let item of details) {
    detailsString += `${item.name} x ${item.count} = ${item.price * item.count}元\n`;
  }
  detailsString += "-----------------------------------\n";
  return detailsString;
}

function renderPromo(promoInfo) {
  if (promoInfo) {
    return `使用优惠:\n${promoInfo}\n-----------------------------------\n`
  }
}

function renderFooter(totalCost) {
  return `总计：${totalCost}元\n===================================`;
}

