/*var wrappers = document.querySelectorAll(".wrapper");

wrappers.forEach(function(el)) {

  var theseCopy = el.querySelectorAll(".copy");

    theseCopy.forEach(function(copy)) {
      console.log(copy);
    });

    console.log("then next line");
  });

  for (let i=0; i < wrappers.length; i++)
}
console.log("hello");*/
/*    - - - - - - - - - - - -  modal   -- - - - - - - -   */
var modal = document.querySelector(".modal");
var xButton = document.querySelector(".modal .overlay");
var modalButton = document.querySelector(".modal-button");
var modalContent = document.querySelector(".modal-text");

modalButton.addEventListener("click", addShow);
modal.addEventListener("click", removeShow);

function addShow() {
modal.classList.add("show");
}
function removeShow() {
modal.classList.remove("show");
}


var wrapper = document.querySelectorAll('.wrapper');

var maxHeight = 0;

wrapper.forEach(function() {
  console.log("Hello World");
});
// Get the modal
var modal = document.querySelector('.modal-text');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// Shrink nav on Scroll
function resizeHeaderOnScroll() {
  const distanceY = window.pageYOffset || document.documentElement.scrollTop,
  shrinkOn = 200,
  headerEl = document.querySelector('.modal-button');

  if (distanceY > shrinkOn) {
    headerEl.classList.add('small');
  } else {
    headerEl.classList.remove('small');
  }
}

window.addEventListener('scroll', resizeHeaderOnScroll);

// var nav = document.querySelector('.modal-button');
//
// window.addEventListener('scroll', function(){
//     if(window.pageYOffSet > 100) {
//       nav.classList <= '.small'
//     } else {
//       nav.classList = '.modal';
//     }
// });






var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
};
/*    - - - - - - - - - - - -  j query   -- - - - - - - -   */
// $(document).ready(function (){
//   var whiteTrue = true;
//
// $(window).scroll(function () {
//
//   if ($(window).scrollTop() > 0) {
//     $("nav").addClass("sticky");
//   } else {
//     $("nav").remove("sticky");
//   }
//
//   if (whileTrue && $(window).scrollTop() > ($(document).height() * 0.75) - $(window).height()) {
//     whileTrue = fasle;
//     $("modal").addClass()
//   }
//
// });
// });
// $(document).ready(function(){
//   // Add smooth scrolling to all links
//   $("a").on('click', function(event) {
//
//     // Make sure this.hash has a value before overriding default behavior
//     if (this.hash !== $('.scroll')) {
//       // Prevent default anchor click behavior
//       event.preventDefault();
//
//       // Store hash
//       var hash = this.hash;
//
//       // Using jQuery's animate() method to add smooth page scroll
//       // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//       $('html, body').animate({
//         scrollTop: $(hash).offset().top
//       }, 1000, function(){
//
//         // Add hash (#) to URL when done scrolling (default click behavior)
//         window.location.hash = hash;
//       });
//     } // End if
//   });
// });

// $(document).ready(function(){
//
//   var scrollLink = $('.scroll');
//
//   scrollLink.click(function(e) {
//     e.preventDefault();
//     $('body,html').animate({
//       scrollTop: $(this.hash).offset().bottom
//     }, 2000 );
//   })
//
// })
$(document).scroll(function(e) {
    var scrollPos = $(this).scrollTop{};
    if (scrollPos < 100 {
      $('.scroll')
    })
})
