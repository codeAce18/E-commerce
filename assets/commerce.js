'use strict';

// Modal variables
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// Modal function

const modalCloseFunc = function () {modal.classList.add('closed');}

// Modal Eventlistener
modalCloseOverlay.addEventListener("click", modalCloseFunc);
modalCloseBtn.addEventListener("click", modalCloseFunc);

// Notification toast variables

const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

// Eventlisteners

toastCloseBtn.addEventListener("click", function() {

    notificationToast.classList.add('closed');
});


// Mobile Menu Variables

const mobileMenuOpenBtn = document.querySelectorAll("[data-mobile-menu-open-btn]");
const mobileMenuOpenBtn2 = document.querySelectorAll("[data-mobile-menu-open-btn-2]");
const mobileMenu = document.querySelectorAll("[data-mobile-menu]");
const mobileMenu2 = document.querySelectorAll("[data-mobile-menu-2]");
const mobileMenuCloseBtn = document.querySelectorAll("[data-mobile-menu-close-btn]");
const mobileMenuCloseBtn2 = document.querySelectorAll("[data-mobile-menu-close-btn-2]");
const overlay = document.querySelectorAll("[data-overlay]");

for(let i = 0; i < mobileMenuOpenBtn.length; i++) {

    // Mobile Menu Function
    const mobileMenuCloseFunc = function () {
        mobileMenu[i].classList.remove("active");
        overlay.classList.remove('active');
    }

    const mobileMenuCloseFunc2 = function () {
        mobileMenu2[i].classList.remove("active");
        overlay.classList.remove('active');
    }

    mobileMenuOpenBtn[i].addEventListener("click", function () {
        mobileMenu[i].classList.add('active');
        overlay.classList.add('active');
    });

    mobileMenuOpenBtn2[i].addEventListener("click", function () {
        mobileMenu2[i].classList.add('active');
        overlay.classList.add('active');
    });

    mobileMenuCloseBtn[i].addEventListener("click", mobileMenuCloseFunc);
    mobileMenuCloseBtn2[i].addEventListener("click", mobileMenuCloseFunc2);
    overlay.addEventListener("click", mobileMenuCloseFunc);
    overlay.addEventListener("click", mobileMenuCloseFunc2);
}


// Accordion Variables

