


function SlideShow() {

    let i ;
    let slideindex = 0;

    let slides = document.getElementsByClassName("slider-container")

    if (slideindex > slides.length) {
        slideindex = 1
    }

    for (let index = 0; index < slides.length; index++) {
        const element = slides[index];

        element.style.display = "none"
        
    }

    slideindex++
    slides[slideindex-]
    
}