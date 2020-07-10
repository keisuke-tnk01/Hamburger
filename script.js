

$(function () {
  $('#js-open_menu').click(function () {
    $('.l-open_menu-wrapper').fadeIn();
    $('#js-sidebar_wrapper').animate({ "marginRight": "35rem" });
    /*$('body').not('sidebar').css('position', 'fixed');*/
    $('.l-sidebar_wrapper').css('overflow', 'auto');
    /*$('sidebar').css('-webkit-overflow-scrolling', 'touch');*/
  });
});

/*let menuScroll = function() {
  $('sidebar').css('position', 'fixed');
}
let time =4000;
setTimeout(menuScroll, time);*/

$(function () {
  $('#js-close_menu').click(function () {
    $('#js-sidebar_wrapper').removeAttr('style');/*横にスライドしたsidebarを初期化*/
    $('.l-open_menu-wrapper').fadeOut();
    /*$('body').removeAttr('style');
    $('sidebar').removeAttr('style');*/
  });
});