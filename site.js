$ = jQuery;
$('.section').hide();

var currentSection = "";

$('.menu-item a').on('click', function (e) {
  e.preventDefault();
  var anchor = $(this).attr('href').substring(1);
  if (currentSection == anchor)
    return;
  currentSection = anchor;
  window.location.hash = anchor;
  $('.section').hide(500);
  $('.section.' + anchor).show(300);
});

$(function () {
  var hash = document.location.hash || "#welcome";
  hash = hash.substring(1);
  $('.section.' + hash).show();
  var currentSection = hash;
});
