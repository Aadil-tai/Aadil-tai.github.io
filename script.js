let moon = document.getElementById("moon");
let text = document.getElementById("text");
let train = document.getElementById("train");

let d_moon = document.getElementById("d_moon");
let man = document.getElementById("man");

window.addEventListener("scroll",()=>{
    let value = window.scrollY;
    moon.style.top = value * .9 + "px";
    text.style.top = 80 + value * -0.2 + '%';
    train.style.left = value * 1.5 + "px";

    d_moon.style.top = value * .3 + "px";
    man.style.left = value * .6 + "px";

})

window.addEventListener("scroll", () => {
    const aboutSection = document.getElementById("about");  // Get the 'about' section
    const navBar = document.querySelector("header"); // Get the navigation bar

    // Get the position of the "About" section
    const aboutSectionPosition = aboutSection.getBoundingClientRect().top;
    
    // Change the color when scrolling to the "About" section
    if (aboutSectionPosition <= window.innerHeight && aboutSectionPosition >= 0) {
        navBar.style.backgroundColor = "#ff5722"; // Change to your desired color when in "About" section
    } else {
        navBar.style.backgroundColor = ""; // Reset to the original color when not in the "About" section
    }
});