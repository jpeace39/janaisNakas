$(document).ready(function() {
$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(800)
    .next()
    .fadeIn(1800)
    .end()
    .appendTo('#slideshow');
},  2500);
})
