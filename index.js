// Toggle Menu //

function displayMenu() {
    const menu = document.getElementById("primary-navigation");
    const state = document.querySelector(".mobile-nav-toggle");
    const footer = document.querySelector("footer");
    menu.classList.toggle("primary-navigation-toggle");

    if(state.getAttribute("data-visible") === "false") {
        menu.style = "box-shadow: 0px 0px 200px 100vh rgba(0,0,0,0.5);"
        state.style = "background-image: url(./images/icon-close.svg); position: fixed;";
        state.setAttribute("data-visible", true);
        state.setAttribute("aria-expanded", true);
        footer.style.background = "#000000";
        footer.style.opacity = ".5";
    } else {
        menu.style = "box-shadow: none;"
        state.style = "background-image: url(./images/icon-hamburger.svg); position: absolute;";
        state.setAttribute("data-visible", false);
        state.setAttribute("aria-expanded", false);
        footer.style.background = "";
        footer.style.opacity = "";
    }
}


// Themes //

const primaryImg = document.getElementById("primary-header");
const primaryTitle = document.getElementById("primaryTitle");
const primaryParagraph = document.getElementById("primaryParagraph");
var themeValue = document.querySelector(".left-button");
var themeValueRight = document.querySelector(".right-button");


 function ThemeBefore() {

     if(themeValue.getAttribute("value") === "1") {

         themeValue.setAttribute("value", "3");
         primaryTitle.innerHTML = "Manufactured with the best materials";
         primaryParagraph.innerHTML = "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.";

         if(window.matchMedia("(min-width:820px)").matches) {
            primaryImg.style = "background: url(./images/desktop-image-hero-3.jpg) no-repeat; background-size: cover; background-position: center;";
          } else {
            primaryImg.style = "background: url(./images/mobile-image-hero-3.jpg) no-repeat; background-size: cover; background-position: center;";
          }
    
    function resizing() {
        if("matchMedia" in window) {
          if(window.matchMedia("(min-width:820px)").matches) {
            primaryImg.style = "background: url(./images/desktop-image-hero-3.jpg) no-repeat; background-size: cover; background-position: center;";
          } else {
            primaryImg.style = "background: url(./images/mobile-image-hero-3.jpg) no-repeat; background-size: cover; background-position: center;";
          }
        }
    }
      window.addEventListener('resize', resizing, false);
     }

     else if(themeValue.getAttribute("value") === "2") {

         themeValue.setAttribute("value", "1");
         
         primaryTitle.innerHTML = "Discover innovative ways to decorate";
         primaryParagraph.innerHTML = "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.";

         if(window.matchMedia("(min-width:820px)").matches) {
            primaryImg.style = "background: url(./images/desktop-image-hero-1.jpg) no-repeat; background-size: cover; background-position: bottom left;";
          } else {
            primaryImg.style = "background: url(./images/mobile-image-hero-1.jpg) no-repeat; background-size: cover; background-position: bottom left;";
          }
    
    function resizing() {
        if("matchMedia" in window) {
          if(window.matchMedia("(min-width:820px)").matches) {
            primaryImg.style = "background: url(./images/desktop-image-hero-1.jpg) no-repeat; background-size: cover; background-position: bottom left;";
          } else {
            primaryImg.style = "background: url(./images/mobile-image-hero-1.jpg) no-repeat; background-size: cover; background-position: bottom left;";
          }
        }
    }
      window.addEventListener('resize', resizing, false);
     }

     else if(themeValue.getAttribute("value") === "3") {

         themeValue.setAttribute("value", "2");
         
         primaryTitle.innerHTML = "We are available all across the globe";
         primaryParagraph.innerHTML = "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.";

         if(window.matchMedia("(min-width:820px)").matches) {
            primaryImg.style = "background: url(./images/desktop-image-hero-2.jpg) no-repeat; background-size: cover; background-position: center;";
          } else {
            primaryImg.style = "background: url(./images/mobile-image-hero-2.jpg) no-repeat; background-size: cover; background-position: center;";
          }
    
    function resizing() {
        if("matchMedia" in window) {
          if(window.matchMedia("(min-width:820px)").matches) {
            primaryImg.style = "background: url(./images/desktop-image-hero-2.jpg) no-repeat; background-size: cover; background-position: center;";
          } else {
            primaryImg.style = "background: url(./images/mobile-image-hero-2.jpg) no-repeat; background-size: cover; background-position: center;";
          }
        }
    }
      window.addEventListener('resize', resizing, false);
     }
 };


 function ThemeAfter() {

     if(themeValue.getAttribute("value") === "1") {

         themeValue.setAttribute("value", "2");
         
         primaryTitle.innerHTML = "We are available all across the globe";
         primaryParagraph.innerHTML = "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.";

         if(window.matchMedia("(min-width:820px)").matches) {
            primaryImg.style = "background: url(./images/desktop-image-hero-2.jpg) no-repeat; background-size: cover; background-position: center;";
          } else {
            primaryImg.style = "background: url(./images/mobile-image-hero-2.jpg) no-repeat; background-size: cover; background-position: center;";
          }
    
    function resizing() {
        if("matchMedia" in window) {
          if(window.matchMedia("(min-width:820px)").matches) {
            primaryImg.style = "background: url(./images/desktop-image-hero-2.jpg) no-repeat; background-size: cover; background-position: center;";
          } else {
            primaryImg.style = "background: url(./images/mobile-image-hero-2.jpg) no-repeat; background-size: cover; background-position: center;";
          }
        }
    }
      window.addEventListener('resize', resizing, false);
     }

     else if(themeValue.getAttribute("value") === "2") {

         themeValue.setAttribute("value", "3");
         
         primaryTitle.innerHTML = "Manufactured with the best materials";
         primaryParagraph.innerHTML = "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.";

         if(window.matchMedia("(min-width:820px)").matches) {
            primaryImg.style = "background: url(./images/desktop-image-hero-3.jpg) no-repeat; background-size: cover; background-position: center;";
          } else {
            primaryImg.style = "background: url(./images/mobile-image-hero-3.jpg) no-repeat; background-size: cover; background-position: center;";
          }
    
    function resizing() {
        if("matchMedia" in window) {
          if(window.matchMedia("(min-width:820px)").matches) {
            primaryImg.style = "background: url(./images/desktop-image-hero-3.jpg) no-repeat; background-size: cover; background-position: center;";
          } else {
            primaryImg.style = "background: url(./images/mobile-image-hero-3.jpg) no-repeat; background-size: cover; background-position: center;";
          }
        }
    }
      window.addEventListener('resize', resizing, false);
     }

     else if(themeValue.getAttribute("value") === "3") {

         themeValue.setAttribute("value", "1");

         primaryTitle.innerHTML = "Discover innovative ways to decorate";
         primaryParagraph.innerHTML = "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.";

         if(window.matchMedia("(min-width:820px)").matches) {
            primaryImg.style = "background: url(./images/desktop-image-hero-1.jpg) no-repeat; background-size: cover; background-position: bottom left;";
          } else {
            primaryImg.style = "background: url(./images/mobile-image-hero-1.jpg) no-repeat; background-size: cover; background-position: bottom left;";
          }
    
    function resizing() {
        if("matchMedia" in window) {
          if(window.matchMedia("(min-width:820px)").matches) {
            primaryImg.style = "background: url(./images/desktop-image-hero-1.jpg) no-repeat; background-size: cover; background-position: bottom left;";
          } else {
            primaryImg.style = "background: url(./images/mobile-image-hero-1.jpg) no-repeat; background-size: cover; background-position: bottom left;";
          }
        }
    }
      window.addEventListener('resize', resizing, false);
     }
 };