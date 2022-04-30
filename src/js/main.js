function showMenu() {{
  $(".nav--nowrapp").toggleClass("nav--wrapp");
  $(".nav").toggleClass("nav--hidden");
  console.log("Algo ocurrio con el menu");
}}

$(".nav__menu").click(() => showMenu());
$(".nav__close").click(() => showMenu());

$(".nav__title").click(function () {
  const subList = this.nextSibling.nextSibling;
  const btn = this.children[0];
  $(btn).toggleClass("nav__title-btn--active");
  $(subList).toggleClass("nav__sublist--hidden");
});

$(window).resize(function() {
  if ($(window).width() >= 1024) {
    $(".nav__sublist").addClass("nav__sublist--hidden");
    $(".nav--nowrapp").removeClass("nav--wrapp");
    $(".nav").removeClass("nav--hidden");
  } else {
    $(".nav--nowrapp").removeClass("nav--wrapp");
    $(".nav").addClass("nav--hidden");
  }
});