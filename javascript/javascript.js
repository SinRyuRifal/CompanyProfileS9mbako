const navbar = document.getElementsByTagName('nav')[0];
window.addEventListener('scroll', function() {
  console.log(window.scrollY);
  if (window.scrollY > 1) {
    navbar.classList.replace('bg-transparent', 'nav-color');
  } else if (this.window.scrollY <= 0){
    navbar.classList.replace('nav-color', 'bg-transparent');
  }
}); 

var swiper = new Swiper(".news-swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    
  breakpoints: {
    
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },

    480: {
      slidesPerView: 3,
      spaceBetween: 30
    }

  },
  });

  var swiper = new Swiper(".cabangSwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    pagination: {
      clickable: true,
    },

  breakpoints: {

    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },

    480: {
      slidesPerView: 1,
      spaceBetween: 30
    },

    576: {
      slidesPerView: 2,
      spaceBetween: 30
    },

  },
    navigation: {
      nextEl: ".button-arrow-right",
      prevEl: ".button-arrow-left",
    },
    
  });

  var password = "RipalTampan";
  var isAuthenticated = false; 
  var authenticationTimeout = 10000;

  function checkPassword() {
      var enteredPassword = prompt("Dilarang Inspect Element! Masukkan kata sandi:");

    
      if (enteredPassword === password) {
          isAuthenticated = true;
          setTimeout(function() {
              isAuthenticated = false; 
          }, authenticationTimeout);
      } else {
          alert("Kata sandi salah!");
      }
  }

  document.addEventListener('contextmenu', function(e) {
      if (!isAuthenticated) {
          e.preventDefault(); 
          checkPassword(); 
      }
  });


  document.addEventListener('keydown', function(e) {
      if (!isAuthenticated && e.key === "F12") {
          e.preventDefault();
          checkPassword(); 
      }
  });



document.addEventListener('selectstart', function(event) {
  event.preventDefault();
});

document.addEventListener('mousedown', function(event) {
  if (event.button === 2) {
      event.preventDefault();
  }
});

