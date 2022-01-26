// ITERATION 1

// const { product } = require("puppeteer");

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector(".price span").innerText
  const quantity = product.querySelector(".quantity input").value
  const subtotal  = price * quantity

  const subTotalFinal = product.querySelector(".subtotal span")
  subTotalFinal.innerText = subtotal

  return subtotal
}


function calculateAll() {

  // ITERATION 2
  const products = Array.from(document.getElementsByClassName("product"))

  products.forEach((element) => {
    updateSubtotal(element)
  }
  )
  
  // ITERATION 3
  //... your code goes here

  const total = products.reduce((ac,element)=>{ 
    return ac += updateSubtotal(element)
  },
  0)
 
  document.querySelector("#total-value span").textContent = total
  return total



}


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;

  //console.log('The target in remove is:', target);

  const removeFinal = (target.parentNode.parentNode).remove()

  calculateAll()




}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeElement = document.querySelectorAll(".btn-remove")
  removeElement.forEach(element=>(
  element.addEventListener("click", removeProduct)))

  console.log(removeElement)

  //... your code goes here
});
