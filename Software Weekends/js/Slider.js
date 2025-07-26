
 let slideindex = 0;
SlideShow();

function SlideShow() {

    let slides = document.getElementsByClassName("slide")

    for (let index = 0; index < slides.length; index++) {
        

        slides[index].style.display = "none"
        
    }

    slideindex++
    
   if (slideindex > slides.length) {
        slideindex = 1
    }

    slides[slideindex-1].style.display = "block"
    setTimeout(SlideShow,2000)    
}




