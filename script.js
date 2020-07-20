$(function () {
  $('#js-open_menu').click(function () {
    $('.l-open_menu-wrapper').fadeIn();
    $('.l-sidebar_wrapper').addClass('is-open');
    $('.l-menu_cancel_btn').addClass('is-open');
    $('.l-sidebar_title').addClass('is-open');
    $('body').addClass('is-open');
  });
});

$(function () {
  $('#js-close_menu').click(function () {
    $('.l-sidebar_wrapper').removeClass('is-open');
    $('.l-menu_cancel_btn').removeClass('is-open');
    $('.l-sidebar_title').removeClass('is-open');
    $('.l-open_menu-wrapper').fadeOut();
    $('body').removeClass('is-open');
  });
});