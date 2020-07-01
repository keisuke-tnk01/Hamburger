/*$('#js-open_menu').click(function() {
  $('sidebar').css('right', '0'),
  $('sidebar').css('position', 'absolute');
  $('header', 'main', 'footer').css('position', 'fixed');
  $('header', 'main', 'footer').css('opacity', '0.2');
});

$('#js-close_menu').click(function() {
  $('sidebar').css('right', '-35rem');
  $('sidebar').css('position', 'fixed');
  $('header', 'main', 'footer').css('position', 'absolute');
  
});*/


$(function() {
  $('#js-open_menu').click(function() {
    $('#js-sidebar_wrapper').fadeIn();
    $('.l-open_menu-wrapper').fadeIn();
    $('header', 'main', 'footer').css('position', 'fixed');
  });
});

  
 
$(function() {  
  // 「.close-modal」要素にclickイベントを設定してください
  $('#js-close_menu').click(function(){
    $('#js-sidebar_wrapper').fadeOut();
    $('.l-open_menu-wrapper').fadeOut();
    $('header', 'main', 'footer').css('position', 'absolute');
  });
  
});

