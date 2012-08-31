$ = jQuery;
$('.section').hide();
$('.section.welcome').show();
var currentSection = "welcome";
$('.menu-item a').on('click', function (e) {
  e.preventDefault();
  var anchor = $(this).attr('href').substring(1);
  if (currentSection == anchor)
    return;
  currentSection = anchor;
  $('.section').hide(500);
  $('.section.' + anchor).show(300);
});
