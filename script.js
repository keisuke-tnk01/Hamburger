

$(function () {
  $('#js-open_menu').click(function () {
    $('#js-sidebar_wrapper').animate({ "marginRight": "35rem" });
    $('.l-open_menu-wrapper').fadeIn();
    /*$('body').css('overflow', 'hidden');*/
    $('body').css('position', 'fixed');
  });
});



$(function () {
  $('#js-close_menu').click(function () {
    $('#js-sidebar_wrapper').removeAttr('style');/*横にスライドしたsidebarを初期化*/
    $('.l-open_menu-wrapper').fadeOut();
    $('body').removeAttr('style');
  });
});