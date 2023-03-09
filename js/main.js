
// slide menu
$('span.select_btn').click(function(){
  $('ul.select').stop().slideDown();
  $('span.select_btn').removeClass('off');
  $(this).addClass('off');
});
$('span.select_btn.off').click(function(){
  $('ul.select').stop().slideUp();
});

$('button.menu_btn').click(function(){
  $('header div.inner-wrap.on').stop().slideDown();
  $('button.menu_btn').removeClass('on');
  $(this).addClass('on');
});
$('button.menu_btn.on').click(function(){
  $('header div.inner-wrap.on').stop().slideUp();
});