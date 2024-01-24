const menu = document.querySelector(".part-main__burger");
// const menuDropdown = document.querySelector(".part-main__item--dropdown");

menu.addEventListener("click", () => {
  document.documentElement.classList.toggle("menu-open");
});

// menuDropdown.addEventListener("click", () => {
//   menuDropdown.classList.toggle("sub-open");
// });
