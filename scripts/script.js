import {
  englishToPersianNumber,
  toPersianNumbersWithComma,
} from "./utils/convertNumbers.js";
import { calculateDiscount } from "./utils/calculateDiscount.js";
import { initScrollHeader } from "./utils/initScrollHeader.js";



document.addEventListener("DOMContentLoaded", function () {

  
  initScrollHeader();
  
  calculateDiscount();
  
  document.querySelectorAll(".persian-number").forEach((el) => {
    el.textContent = englishToPersianNumber(el.textContent)
  })
  document.querySelectorAll(".price").forEach((el) => {
    // const text = el.textContent.trim().replace(/,/g, "");
    const text = el.textContent.trim()
    const persianPrice = toPersianNumbersWithComma(text);
    el.textContent = persianPrice;
    console.log(text);
    console.log(persianPrice);
  });
});


