/* variables ue cambiaran */
let userQuantity = document.getElementById('quantity');
let userColor = document.getElementById('color');

/* constantes ue uedaran fijas*/
const PRODUCT_PRICE = 29990;
const FINAL_PRICE = document.getElementById('total');
const FINAL_QUANTITY = document.getElementById('qty-final');
const FINAL_COLOR = document.getElementById('user-color');

/* Formato para poner el precio en moneda chilena */
FINAL_PRICE.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "CLP" }).format(PRODUCT_PRICE);

/* funcion para sacar el total de la compra */
const calculator = (event) => {
  event.preventDefault();
  let totalCalculator = userQuantity.value * PRODUCT_PRICE;
  FINAL_PRICE.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "CLP" }).format(totalCalculator);
  FINAL_QUANTITY.innerHTML = userQuantity.value;
  FINAL_COLOR.style.backgroundColor = userColor.value;
};


