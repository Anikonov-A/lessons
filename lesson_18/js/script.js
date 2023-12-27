const icon = document.querySelector(".icon-menu");
const menuParent = document.querySelectorAll(".menu__item--parent");

icon.addEventListener("click", () => {
  document.documentElement.classList.toggle("menu-open");
});

menuParent.forEach((e) => {
  e.addEventListener("click", () => {
    e.classList.toggle("sub-open");
  });
});
