import { toPersianNumbersWithComma } from "./utils/convertNumbers.js";
import { calculateDiscount } from "./utils/calculateDiscount.js";
import { initScrollHeader } from "./scroll-handler.js";


document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".price").forEach((el) => {
    const text = el.textContent.trim().replace(/,/g, "");
    const persianPrice = toPersianNumbersWithComma(text);
    el.textContent = persianPrice;
  });

  initScrollHeader();

  calculateDiscount();
});
