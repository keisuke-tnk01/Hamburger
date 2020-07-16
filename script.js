

/*$(function () {
  $('#js-open_menu').click(function () {
    $('.l-open_menu-wrapper').fadeIn();
    $('#js-sidebar_wrapper').animate({ "marginRight": "35rem" });
    $('.l-sidebar_wrapper').css('overflow', 'auto');
  });
});*/

/*let menuScroll = function() {
  $('sidebar').css('position', 'fixed');
}
let time =4000;
setTimeout(menuScroll, time);*/


$(function () {
  $('#js-open_menu').click(function () {
    $('.l-open_menu-wrapper').fadeIn();
    $('#js-sidebar_wrapper').addClass('is-open');
    $('.l-menu_cancel_btn').addClass('is-open');
    $('.l-sidebar_title').addClass('is-open');
    $(body).addClass('is-open');
  });
});

$(function () {
  $('#js-close_menu').click(function () {
    $('#js-sidebar_wrapper').removeClass('is-open');
    $('.l-menu_cancel_btn').removeClass('is-open');
    $('.l-sidebar_title').removeClass('is-open');
    $('.l-open_menu-wrapper').fadeOut();
    $(body).removeClass('is-open');
  });
});