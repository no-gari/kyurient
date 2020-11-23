$(document).ready(function(){
  $('#wrapper .header-wrapper .navigation-bar .navbar-inner .navbar-lists .topmenu-list a').click(function(){
    $('#wrapper .header-wrapper .navigation-bar .navbar-inner .navbar-lists .topmenu-list .active').removeClass("active");
    $(this).addClass("active");
});

  $('#wrapper .header-wrapper .navigation-bar .navbar-inner .navbar-lists .topmenu-list div a').click(function(){
    $('#wrapper .header-wrapper .navigation-bar .navbar-inner .navbar-lists .topmenu-list div .active').removeClass("active");
    $(this).addClass("active");
});

$('#wrapper .main-banner .topmenu .topmenu-bar .topmenu-lists a').click(function(){
  $('#wrapper .main-banner .topmenu .topmenu-bar .topmenu-lists .active').removeClass("active");
  $(this).addClass("active");
});

$('#wrapper .body-wrapper .body1 .body1-contents .body1-contents-wrapper .body1-img .body1-img-wrapper').hover(function() {
  $(this).find(':first-child').hide();
  $(this).find(':last-child').show();
}, function(){
  $(this).find(':last-child').hide();
  $(this).find(':first-child').show();
});

$('#wrapper .main-banner .top-buttons .main-btns .btn-right .btn').hover(function() {
  $(this).find(':first-child').hide();
  $(this).find(':last-child').show();
}, function(){
  $(this).find(':last-child').hide();
  $(this).find(':first-child').show();
});

$('#wrapper .artists .pictures .pictures-wrapper').hover(function() {
  $(this).find(':first-child').hide();
  $(this).find(':last-child').show();
}, function(){
  $(this).find(':last-child').hide();
  $(this).find(':first-child').show();
});

});
