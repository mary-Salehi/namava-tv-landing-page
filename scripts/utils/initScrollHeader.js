export function initScrollHeader() {
  const header = document.querySelector(".header");
  let lastScrollY = window.scrollY;

  // Scroll direction detection
  window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY) {
      // Scrolling down - hide header
      header.classList.add("hidden");
    } else {
      // Scrolling up - show header
      header.classList.remove("hidden");
    }

    lastScrollY = window.scrollY;
  });
}
