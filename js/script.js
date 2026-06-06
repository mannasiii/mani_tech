const heroSlider = document.querySelector("#heroSlider");

new bootstrap.Carousel(heroSlider, {
    interval: 5000,
    ride: "carousel",
    pause: false,
    touch: true,
    wrap: true
});


// service 
const cards = document.querySelectorAll(".service-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transition = ".35s";

    });

});

// Portfolio Reveal Animation

// const portfolioCards = document.querySelectorAll(".portfolio-card");

// const observer = new IntersectionObserver((entries)=>{

//     entries.forEach(entry=>{

//         if(entry.isIntersecting){

//             entry.target.style.opacity="1";

//             entry.target.style.transform="translateY(0)";

//         }

//     });

// },{
//     threshold:0.2
// });

// portfolioCards.forEach(card=>{

//     card.style.opacity="0";

//     card.style.transform="translateY(60px)";

//     card.style.transition=".8s ease";

//     observer.observe(card);

// });
// section 4 try
const project = document.querySelector(".featured-project");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            project.classList.add("show");

        }

    });

});

observer.observe(project);

// section 5
const processCards = document.querySelectorAll(".process-card");

const processObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0)";

        }

    });

},{threshold:0.2});

processCards.forEach(card=>{

    card.style.transform="translateY(80px)";

    processObserver.observe(card);

});

// cta 
// CTA Fade Animation

const cta = document.querySelector(".cta-box");

const ctaObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            cta.style.opacity="1";
            cta.style.transform="translateY(0)";

        }

    });

});

cta.style.opacity="0";
cta.style.transform="translateY(60px)";
cta.style.transition="1s ease";

ctaObserver.observe(cta);

// header
window.addEventListener("scroll", function () {

    const nav = document.querySelector(".custom-navbar");

    if(window.scrollY > 50){

        nav.style.padding = "12px 0";
        nav.style.background = "rgba(8,17,31,0.95)";

    } else {

        nav.style.padding = "18px 0";
        nav.style.background = "rgba(8,17,31,0.7)";
    }

});


// breadcrump
