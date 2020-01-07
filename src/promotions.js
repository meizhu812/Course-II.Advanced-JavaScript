function loadPromotions() {
  return [
    {
      type: '满30减6元',
      getPromoDetails: function(fullCost) {
        return {
          type: this.type,
          cost: fullCost >= 30 ? fullCost-6 : fullCost,
          info: "满30减6元，省6元"
        }
      }
    },
    {
      type: '指定菜品半价',
      items: ['ITEM0001', 'ITEM0022'],
      getPromoDetails: function(fullCost, costDetails) {
        const promoCollection = new Set(this.items);
        let [promoItems, discount] = costDetails.reduce((acc, cur) => {
          if (promoCollection.has(cur.id)) {
            acc[0].push(cur.name);
            acc[1] += cur.price * cur.count / 2;
          }
          return acc;
        }, [[], 0]);
        return {
          type: this.type,
          cost: fullCost-discount,
          info: `指定菜品半价(${promoItems.join("，")})，省${discount}元`,
        }
      }
    }
  ];
}
