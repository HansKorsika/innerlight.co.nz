var currentSection = "";

var changeHandler = function (e, skipAnimate) {
  var hash = window.location.hash.substring(1);
  if (currentSection == hash)
    return;
  $('.section').hide(!skipAnimate && 500);
  $('.section.' + hash).show(!skipAnimate && 300);
  currentSection = hash;
};

$('.menu-item a').on('click', function (e) {
  e.preventDefault();
  window.location.hash = $(this).attr('href');
  changeHandler();
});

window.location.hash = window.location.hash || "welcome";
changeHandler(null, true);

window.onhashchange = changeHandler;
