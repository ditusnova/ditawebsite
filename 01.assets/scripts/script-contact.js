'use strict' ;

/* CHIP */





const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");

const toggleNav = () => {
    navbar.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNav);


/*
HEADER ANIMATION
*/

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        header.classList.add("active");
        backTopBtn.classList.add("active");
    } else {
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
    }
});


document.addEventListener('DOMContentLoaded', function() {
    // Automatically select the "Contact" tab
    const contactTab = document.querySelector('[data-tab-btn="contact"]');
    contactTab.classList.add('active');
    
    // Your existing code...
});

/* TAB */


const /* {NodeList} */ $tabBtn = document.querySelectorAll("[data-tab-btn]");
let /* {NodeElement} */ [lastActiveTab] = document.querySelectorAll("[data-tab-content]");
let /* {NodeElement} */ [lastActiveTabBtn] = $tabBtn;

$tabBtn.forEach(item => {
    item.addEventListener("click", function() {
        lastActiveTab.classList.remove("active");
        lastActiveTabBtn.classList.remove("active");

        const /* {NodeElement} */ $tabContent = document.querySelector(`[data-tab-content="${item.dataset.tabBtn}"]`);
        $tabContent.classList.add("active");
        this.classList.add("active");

        lastActiveTab = $tabContent;
        lastActiveTabBtn = this;
    });
});
