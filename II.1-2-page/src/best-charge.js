const promotions = loadPromotions();
const itemsPriceMap = loadAllItems().reduce((acc, cur) => {
  acc.set(cur.id, cur.price);
  return acc;
}, new Map());
const itemsNameMap = loadAllItems().reduce((acc, cur) => {
  acc.set(cur.id, cur.name);
  return acc;
}, new Map());

function bestCharge(selectedItems) {
  const costDetails = selectedItems.reduce((acc, cur) => {
    acc.push(((str) => {
      let idAndCount = str.split(" x ");
      return {
        id: idAndCount[0],
        name: itemsNameMap.get(idAndCount[0]),
        price: itemsPriceMap.get(idAndCount[0]),
        count: idAndCount[1]
      }
    })(cur));
    return acc;
  }, []);

  const fullCost = costDetails.reduce((acc, cur) => {
    return acc + cur.price * cur.count;
  }, 0);

  let finalCost = fullCost;
  let discount = 0;
  let promotionApplied = {};

  for (let promotion of promotions) {
    switch (promotion.type) {
      case "满30减6元":
        if (fullCost > 30) {
          discount = 6;
          promotionApplied = {
            type: "满30减6元",
            discount: discount
          }
        }
        break;
      case "指定菜品半价":
        const halfPriceCollection = new Set(promotions.filter((item) => item.type === "指定菜品半价")[0].items);  // 防止促销方式数量或顺序变化
        let halfPriceItems = [];
        let halfPriceDiscount = costDetails.reduce((acc, cur) => {
          if (halfPriceCollection.has(cur.id)) {
            halfPriceItems.push(itemsNameMap.get(cur.id));
            acc += cur.price * cur.count / 2;
          }
          return acc;
        }, 0);
        if (halfPriceDiscount > discount) {
          discount = halfPriceDiscount;
          promotionApplied = {
            type: "指定菜品半价",
            discount: discount,
            items: halfPriceItems
          }
        }
        break;
    }
    finalCost = fullCost - discount;
  }
  return renderDetails(costDetails) + renderPromotionInfo(promotionApplied) + renderFooter(finalCost)
}

function renderDetails(details) {
  let detailsString = "============= 订餐明细 =============\n";
  for (let item of details) {
    detailsString += `${item.name} x ${item.count} = ${item.price*item.count}元\n`
  }
  detailsString += "-----------------------------------\n";
  return detailsString
}

function renderPromotionInfo(promotionApplied) {
  let promoInfoString = "使用优惠:\n";
  switch (promotionApplied.type) {
    case "满30减6元":
      promoInfoString += "满30减6元，省6元\n";
      break;
    case "指定菜品半价":
      promoInfoString += `指定菜品半价(${promotionApplied.items.join("，")})，省${promotionApplied.discount}元\n`;
      break;
    default:
      promoInfoString = "";
  }
  if (promotionApplied.type) {
    promoInfoString += "-----------------------------------\n"
  }
  return promoInfoString
}

function renderFooter(totalCost) {
  return `总计：${totalCost}元\n===================================`
}

