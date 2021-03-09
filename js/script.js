$(document).ready(function() {

  $('.js--wp-1').waypoint(function(direction) {
      $('.js--wp-1').addClass('animated fadeInLeft');
  }, {
      offset: '50%'
  });

  $('.js--wp-2').waypoint(function(direction) {
      $('.js--wp-2').addClass('animated fadeInRight');
  }, {
      offset: '50%'
  });

  $('.js--wp-3').waypoint(function(direction) {
      $('.js--wp-3').addClass('animated fadeInUp');
  }, {
      offset: '50%'
  });
  /* For the sticky navigation */
  $('.js-information').waypoint(function(direction) {
    if (direction === "down") {
        $('nav').addClass('sticky');
    } else {
        $('nav').removeClass('sticky');
    }
  }, {
    offset: '80px;'
  });

  function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function toggleClass(targetElement, addedClass) {
    if (targetElement.classList.contains(addedClass)) {
      targetElement.classList.remove(addedClass);
    }
    else {
      targetElement.classList.add(addedClass);
    }
  };
  
  // This is the function we add to our menu button to enable its click functionality
  document.querySelector('.menu-btn').addEventListener('click', function() {
    
    // This toggleClass is for added 'menu--open' to our menu HTML element. This will open the menu.
    toggleClass(document.querySelector('.menu'), 'menu--open');
    
    // This toggleClass is for adding '.menu-btn--on' to our menu button HTML element. This creates the animation of the hamburger/hotdog icon to the close icon.
    toggleClass(document.querySelector('.menu-btn'), 'menu-btn--on');
  });
  
    var slideIndex = 0;
  showSlides();

  function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block ";  
  dots[slideIndex-1].className += " active ";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
  }
  
});



