"use strict";
!function () {}();

const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', ()=>{
  document.body.classList.toggle('dark');
})
// 
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
// e.init();
// $("#header").headroom();
// headroom.init();
AOS.init();

// O = function () {
//   var m = $('#arrow-top-c');
//   var e = m.parent().width(),
//     t = e / 2,
//     n = 3;
//   m.parent().attr("viewBox", "0 0 ".concat(e, " ").concat(e)), m.attr("stroke-width", n), m.attr("r", t - (n - 1)), m.attr("cx", t), m.attr("cy", t), g = 2 * t * Math.PI, m[0].style.strokeDasharray = "".concat(g, " ").concat(g), m[0].style.strokeDashoffset = g
// }

// O();



