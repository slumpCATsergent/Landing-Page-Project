
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



    window.addEventListener("scroll", function() {
        const header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 0);
    });




    
const navMenu = document.getElementById('nav-menu'),
toggleMenu = document.getElementById('nav-toggle'),
closeMenu = document.getElementById('nav-close')




document.addEventListener('mousemove', move);
function move(e){
this.querySelectorAll('.move').forEach(layer =>{
    const speed = layer.getAttribute('data-speed')

    const x = (window.innerWidth - e.pageX*speed)/120
    const y = (window.innerHeight - e.pageY*speed)/120

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`
})
}


  window.onscroll = function() {
    const header = document.querySelector('header');
    const sticky = header.offsetTop;

    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  };


 
  document.addEventListener('DOMContentLoaded', function () {
    const animate = ScrollReveal({
        origin: "top",
        distance: "60px",
        duration: 2500,
        delay: 400,
    });

    
    animate.reveal(".nav");
    animate.reveal(".home-texts", { origin: "left" });
    animate.reveal(".home-img", { origin: "bottom" });
    animate.reveal(".service-box, .popular-foods-catalog, .trending__content, .book-information", { interval: 100 });
});

  
  

  


