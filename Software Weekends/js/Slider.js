
var slideindex = 1;
SlideShow(slideindex);

function SlideShow(n) {

    let slides = document.getElementsByClassName("slide")

    if (n > slides.length) {slideindex = 1}
    if (n < 1) {slideindex = slides.length}

    for (let index = 0; index < slides.length; index++) {
        

        slides[index].style.display = "none"
        
    }

    slides[slideindex-1].style.display = "block"


}



function NextSlider(n) {

    SlideShow(slideindex += n);


    console.log(slideindex)
    
}









