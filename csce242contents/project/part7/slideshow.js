//This should get the current slide image
const getCurrentSlide = () => {
    return document.querySelector("#slideshow img:not(.hidden)");
};


//This is the function for the next arrow key
document.getElementById("next").onclick = (e) => {
    e.preventDefault();
    const currentImage = getCurrentSlide();
    let nextImage = currentImage.nextElementSibling;

    if(nextImage == null){
        nextImage = document.querySelector("#slideshow img:first-child");
    }
    
    slide(currentImage, nextImage);
};

//This is the function of the previous arrow key
document.getElementById("previous").onclick = (e) => {
    e.preventDefault();
    const currentImage = getCurrentSlide();
    let previousSlide = currentImage.previousElementSibling;

    if(previousSlide == null){
        previousSlide = document.querySelector("#slideshow img:last-child");
    }
    
    slide(currentImage, previousSlide);
};

//slide
const slide =(current, next) => {
    current.classList.add("hidden");
    next.classList.remove("hidden");
};