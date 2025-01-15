// BRANDS SWIPER SLIDER

var swiper = new Swiper('.brandSwiper',{
    slidesPerView: 7,
    spaceBetween: 20,
    loop: true,
    autoplay:{
        delay:1000,
    },
    speed:1500,
    breakpoints:{
        1200:{
            slidesPerView: 7,
            spaceBetween: 20,
        },
        900:{
            slidesPerView: 5,
            spaceBetween: 20,
        },
        500:{
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
});

// SKILLS SWIPER SLIDER

var swiper = new Swiper('.skillSwiper',{
    slidesPerView: 6,
    spaceBetween: 20,
    loop: true,
    autoplay:{
        delay:1000,
    },
    speed:1500,
    breakpoints:{
        1200:{
            slidesPerView: 5,
            spaceBetween: 20,
        }
    },
});

// BLOG SWIPER SLIDER

var swiper = new Swiper('.blogSwiper',{
    slidesPerView: 3,
    spaceBetween: 50,
    loop: true,
    autoplay:{
        delay:1000,
    },
    speed:1500,
    breakpoints:{
        1200:{
            slidesPerView: 3,
            spaceBetween: 20,
        },
        900:{
            slidesPerView: 2,
            spaceBetween: 20,
        },
        500:{
            slidesPerView: 1,
            spaceBetween: 20,
        },
    },
});

// TESTIMONIAL SWIPER SLIDER

var swiper = new Swiper('.testimonialSwiper',{
    slidesPerView: 2,
    spaceBetween: 40,
    loop: true,
    autoplay:{
        delay:1500,
    },
    speed:1500,
    breakpoints:{
        1200:{
            slidesPerView: 2,
            spaceBetween: 20,
        },
        900:{
            slidesPerView: 1,
            spaceBetween: 20,
        },
        500:{
            slidesPerView: 1,
            spaceBetween: 20,
        },
    },
});

// FIX NAV

const nav = document.querySelector('nav');

window.addEventListener('scroll', () =>{
    if(window.scrollY >= 50){
        nav.classList.add('fix-nav')
    }
    else{
        nav.classList.remove('fix-nav')
    }
});

// DARK LIGHT MODE

const body = document.querySelector('body');
const mode = document.querySelector('.mode');
const inverBox = document.querySelector('.brands');
const sunIcon = document.querySelector('.sun-icon');

mode.addEventListener('click',() =>{
    body.classList.toggle('dark-mode');
    inverBox.classList.toggle('inver-box');
    sunIcon.classList.toggle('show-icon');
});

// SHOW MENU

const bar = document.querySelector('.bars');
const menu = document.querySelector('.menu');

bar.addEventListener('click',() =>{
    menu.classList.toggle('show-menu')
});