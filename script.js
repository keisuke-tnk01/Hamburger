$(function () {
  $('#js-open_menu').click(function () {
    $('.c-open_menu-wrapper').fadeIn();
    $('.p-sidebar_wrapper').addClass('is-open');
    $('.c-menu_cancel_btn').addClass('is-open');
    $('.c-sidebar_title').addClass('is-open');
    $('body').addClass('is-open');
  });
});

$(function () {
  $('#js-close_menu').click(function () {
    $('.p-sidebar_wrapper').removeClass('is-open');
    $('.c-menu_cancel_btn').removeClass('is-open');
    $('.c-sidebar_title').removeClass('is-open');
    $('.c-open_menu-wrapper').fadeOut();
    $('body').removeClass('is-open');
  });
});