import { persianToEnglishNumber, toPersianNumbersWithComma } from "./convertNumbers.js";
import { englishToPersianNumber } from "./convertNumbers.js";

export function calculateDiscount() {
  const originalPriceText =
    document.querySelector(".package .price").textContent;
  const discountPercentageText =
    document.querySelector(".package .discount").textContent;

  // Convert Persian → English and parse
  const originalPrice = parseFloat(persianToEnglishNumber(originalPriceText));
  const discountPercentage = parseFloat(
    persianToEnglishNumber(discountPercentageText)
  );

  if (isNaN(originalPrice) || isNaN(discountPercentage)) return;

  // Do math
  const discountAmount = originalPrice * (discountPercentage / 100);
  const finalPrice = originalPrice - discountAmount;

  // Convert back to Persian with commas
  document.querySelector(".package .discount-amount").textContent =
    toPersianNumbersWithComma(discountAmount);
  document.querySelector(".package .final-price").textContent =
    toPersianNumbersWithComma(finalPrice);
}
