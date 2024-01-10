/* menu icon Navbar */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bxs-x-square');
  navbar.classList.toggle('active');
}



/* nav section onscroll */
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');


 
/* Sticky Navbar */


window.onscroll = () => {

sections.forEach(sec =>{
  let top = window.scrollY;
  let offset = sec.offsetTop -150;
  let height = sec.offsetHeight;
  let id = sec.getAttribute('id');
  if(top >= offset && top < offset +height){
    navlinks.forEach(links => {
      links.classList.remove('active');
      document.querySelector('header nav a[href*=' + id  +']').classList.add('active');
    })
  }
})

let header = document.querySelector('.header');





header.classList.toggle('sticky', window.scrollY > 100);

/* remove menu icon navbar when clicked*/

menuIcon.classList.remove('bxs-x-square');
navbar.classList.remove('active');

};

/*-- slidebar --*/
var swiper = new Swiper(".slide-content", {
    spaceBetween: 50,
    grabCursor:true,
    hashNavigation: {
      watchState: true,
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


  /*--Dark Mode Light Mode--*/

  let Darkmode = document.querySelector('#darkMode-icon');

Darkmode.onclick = () => {
  Darkmode.classList.toggle('bxs-sun');
  document.body.classList.toggle('dark-mode');
}



/* Scroll Reveal */
ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
  });


  ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
  ScrollReveal().reveal(' .project-list, .portfolio-box, .about-content, .action', 
  { origin: 'bottom'});

  ScrollReveal().reveal('.about-img', { origin: 'left' });
  
  
/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText",{
  strings : ["a Web","Developer","Engineer"],
  loop : true,
  typeSpeed : 80, 
  backSpeed : 70,
  backDelay : 2000
})