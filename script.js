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
    const sections = document.querySelectorAll("section");  // Get all sections
    const navLinks = document.querySelectorAll(".navlist a");  // Get all nav links
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollPos = window.scrollY + 50;  // Add 50px to make the color change a bit earlier
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href").substring(1) === section.id) {
                    link.classList.add("active");  // Add 'active' class to the link matching the section
                }
            });
        }
                
                if (window.scrollY == 0) {
                    navLinks.forEach(link => link.classList.remove("active"));
                    document.querySelector(".navlist a[href='#home']").classList.add("active");
                }
                if (window.scrollY == 0) {
                    navLinks.forEach(link => link.classList.remove("active"));
                    document.querySelector(".navlist a[href='#home']").classList.add("active");
                }
        
    });
    
});
