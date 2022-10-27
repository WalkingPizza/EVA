const toggleHeaderStyle = () => {
  const header = document.querySelector("header");

  if (!header) return;

  const verticalPosition = window.scrollY;

  if (verticalPosition === 0) header.classList.remove("header--sticky");
  else if (!header.classList.contains("header--sticky"))
    header.classList.add("header--sticky");
};

const toggleMobileMenu = (e) => {
  const isMenuButtonClick = e.target.closest(".header-menu__button");
  const menuButton = document.querySelector(".header-menu__button");
  const menu = document.querySelector(".header-menu");

  if (!isMenuButtonClick || !menu) return;

  const isOpen = menu.classList.toggle("header-menu--open");

  menuButton.classList.toggle("header__menu-button--open");

  document.body.style.overflow = isOpen ? "hidden" : "auto";
};

document.addEventListener("DOMContentLoaded", () => {
  toggleHeaderStyle();

  document.addEventListener("scroll", toggleHeaderStyle);
  document.addEventListener("click", toggleMobileMenu);
});
