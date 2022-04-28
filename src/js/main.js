function showMenu() {{
  $(".nav--nowrapp").toggleClass("nav--wrapp");
  $(".nav").toggleClass("nav--hidden");
  console.log("Algo ocurrio con el menu");
}}

$(".nav__menu").click(function () {
  showMenu();
});

$(".nav__close").click(function () {
  showMenu();
});

$(".nav__title-btn").click(function () {
  const subList = this.parentNode.nextSibling.nextSibling
  $(this).toggleClass("nav__title-btn--active");
  $(subList).toggleClass("nav__sublist--hidden");
});