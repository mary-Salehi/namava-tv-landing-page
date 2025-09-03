const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

export function toPersianNumbersWithComma(n) {
  const numWithCommas = numberWithCommas(n);
  const persianNumber = englishToPersianNumber(numWithCommas);
  return persianNumber;
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function englishToPersianNumber(n) {
  return n.toString().replace(/\d/g, (x) => farsiDigits[parseInt(x)]);
}

export function persianToEnglishNumber(str) {
  return str
    .replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d))
    .replace(/,/g, "");
}