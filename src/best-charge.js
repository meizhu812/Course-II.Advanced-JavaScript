const promotions = loadPromotions();
const allItems = loadAllItems();

const itemsPriceMap = allItems.reduce((acc, cur) => {
  acc.set(cur.id, cur.price);
  return acc;
}, new Map());
const itemsNameMap = allItems.reduce((acc, cur) => {
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

  let [finalCost, discount, bestPromotion]
    = [fullCost, 0, {}];

  for (let promotion of promotions) {
    switch (promotion.type) {  // prepare for future promotion types
      case "满30减6元":
        if (fullCost > 30) {
          discount = 6;
          bestPromotion
            = {
            description: "满30减6元",
            discount: discount
          }
        }
        break;
      case "指定菜品半价":
        const halfPriceCollection = new Set(promotions.find((item) => item.type === "指定菜品半价").items);  // 防止促销方式数量或顺序变化
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
          bestPromotion = {
            description: "指定菜品半价",
            discount: discount,
            items: halfPriceItems
          }
        }
        break;
    }
    finalCost = fullCost - discount;
  }

  return renderDetails(costDetails) + renderPromotionInfo(bestPromotion) + renderFooter(finalCost)
}

function renderDetails(details) {
  let detailsString = "============= 订餐明细 =============\n";
  for (let item of details) {
    detailsString += `${item.name} x ${item.count} = ${item.price * item.count}元\n`
  }
  detailsString += "-----------------------------------\n";
  return detailsString
}

function renderPromotionInfo(promotion) {
  let promoInfoString = "使用优惠:\n";
  
  switch (promotion.description) {
    case "满30减6元":
      promoInfoString += "满30减6元，省6元\n";
      break;
    case "指定菜品半价":
      promoInfoString += `指定菜品半价(${promotion
        .items.join("，")})，省${promotion
          .discount}元\n`;
      break;
    default:
      return "";
  }

  promoInfoString += "-----------------------------------\n"
  return promoInfoString
}

function renderFooter(totalCost) {
  return `总计：${totalCost}元\n===================================`
}

