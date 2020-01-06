function appendChildren(children) {  // shortcut for appendChild
  for (let i = 0, length = children.length; i < length; i++) {
    this.appendChild(children[i]);
  }
}
class ItemRow {
  constructor(itemData) {
    this.data = itemData;
  }

  _toNameCell(name) {
    let cell = document.createElement("td");
    cell.innerHTML = `<span>${name}</span>`;
    return cell;
  };

  _toQuantityCell(quantity) {
    let cell = document.createElement("td");
    cell.innerHTML = `<input type="button" class="m-button" value="-"><span class="item-quantity">${quantity}</span><input type="button" class="p-button" value="+">`;
    return cell;
  };
  
  render() {
    let itemRowElement = document.createElement("tr");
    itemRowElement.setAttribute("class", "item-row");
    appendChildren.call(itemRowElement, [this._toNameCell(this.data.name), this._toQuantityCell(1)]);
    itemRowElement.setAttribute("data-id", this.data.id);
    return itemRowElement;
  }
}

function clearMessage() {
  let cartRows = document.getElementsByClassName("item-row");
  for (let i = 0, len = cartRows.length; i < len; i++) {
    cartRows[i].getElementsByClassName("item-quantity")[0].innerHTML = "1";
  }
  let messageBox = document.getElementById('message');
  messageBox.innerHTML = "请点击“结算”按钮获取结账单";
}

function calculatePrice() {
  let messageBox = document.getElementById('message');
  let itemsSelections = [];
  let cartRows = document.getElementsByClassName("item-row");
  for (let i = 0, len = cartRows.length; i < len; i++) {
    let count = Number(cartRows[i].getElementsByClassName("item-quantity")[0].innerHTML);
    if (count !== 0) {
      itemsSelections.push(`${cartRows[i].getAttribute("data-id")} x ${cartRows[i].getElementsByClassName("item-quantity")[0].innerHTML}`)
    }
  }
  messageBox.innerHTML = bestCharge(itemsSelections);
}


window.onload = function () {
  let cartContents = document.getElementById('cart-contents');
  renderItemsList();
  renderPromotionList();
  cartContents.addEventListener('click', handleQuantityChange, false);

  function renderItemsList() {
    for (let item of loadAllItems()) {
      let itemRow = new ItemRow(item).render();
      cartContents.appendChild(itemRow);
    }
  }

  function renderPromotionList() {
    let promotionsList = document.getElementById("promotions-list");
    for (let promotion of loadPromotions()) {
      switch (promotion.type) {
        case "满30减6元":
          promotionsList.innerHTML += `<li>${promotion.type}</li>`;
          break;
        case "指定菜品半价":
          let names = promotion.items.reduce((acc, cur) => {
            acc.push(itemsNameMap.get(cur));
            return acc;
          }, []);
          promotionsList.innerHTML += `<li>${promotion.type}：${names.join("，")}</li>`;
          break;
      }
    }
  }

  function handleQuantityChange(event) {
    let target = event.target;

    function updateQuantity(offset) {
      let quantityElement =
        offset === 1 ? target.previousElementSibling : target.nextElementSibling;  // m-button[->]quantity[<-]p-button
      let currentQuantity = parseInt(quantityElement.innerHTML);
      currentQuantity += offset;
      if (currentQuantity < 0) {
        currentQuantity = 0;
      }
      quantityElement.innerHTML = currentQuantity.toString();
    }

    switch (target.className) {
      case "m-button": {
        updateQuantity(-1);
        break;
      }
      case "p-button": {
        updateQuantity(1);
        break;
      }
      default: {
        return
      }
    }
  }
};