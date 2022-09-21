const nextButton = document.querySelector(".carousel-item-next")
const prevButton = document.querySelector(".carousel-item-prev")
const slides = document.getElementsByClassName("carousel-item")

const totalSlides = slides.length
let slidePosition = 0

function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove('carousel-item-visible');
        slide.classList.add('carousel-item-hidden');
        
    }
}

function moveToNextSlide() {
    hideAllSlides()
    
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0
    }
    else {
        slidePosition += 1
    }
    slides[slidePosition].classList.add("carousel-item-visible")
}

function moveToPrevSlide() {
    hideAllSlides()
    
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1
    }
    else {
        slidePosition -= 1
    }
    slides[slidePosition].classList.add("carousel-item-visible")
}

setInterval(() => {
    return(
        moveToNextSlide()
    )
},4000)

prevButton.addEventListener("click", moveToPrevSlide)
nextButton.addEventListener("click", moveToNextSlide)

var tl = gsap.timeline({defaults: {duration: 1 }});

tl.from(".animation", {y: 50, opacity: 0})
.from("nav ul a li", {y: 50, opacity: 0, stagger: .3}, "-=.7")
 