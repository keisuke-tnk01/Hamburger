$("js-open_menu").on("click", function() {
  $(this).next().slideToggle();
  $(this).toggleClass("active");
});