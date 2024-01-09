const menu = document.querySelector(".header__burger");

menu.addEventListener("click", () => {
  document.documentElement.classList.toggle("menu-open");
});

