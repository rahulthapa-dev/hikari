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

$("input:checkbox").on('click', function() {
  var $box = $(this);
  if ($box.is(":checked")) {
    var group = "input:checkbox[name='" + $box.attr("name") + "']";
    $(group).prop("checked", false);
    $box.prop("checked", true);
  } else {
    $box.prop("checked", false);
  }
});

//need this to deactivate lightbox on small screens
$(document).ready(function () {
  lightboxOnResize();
});

$(window).resize(function() {
  lightboxOnResize();
});

//***ISOTOPE***
// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.grid-item',
  layoutMode: 'masonry'
});

// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});


// change is-checked class on buttons
$('.btn-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});

function lightboxOnResize() {
  if ($(window).width() < 768) {
    $('a[rel="prettyPhoto[portfolio]"]')
      .removeAttr('rel')
      .addClass('lightboxRemoved');
      $('a.lightboxRemoved').click(function( event ) {
        event.preventDefault();
        console.log("test");
      });
     // $("a[rel='prettyPhoto[portfolio]']").unbind('click');
  } else {
    $('a.lightboxRemoved').attr('rel', 'prettyPhoto[portfolio]').removeClass("lightboxRemoved");
    $("a[rel='prettyPhoto[portfolio]']").prettyPhoto({
      theme: "light_square",
    });
  }
}