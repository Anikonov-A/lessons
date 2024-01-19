const menu = document.querySelector(".part-main__burger");

menu.addEventListener("click", () => {
  document.documentElement.classList.toggle("menu-open");
});
