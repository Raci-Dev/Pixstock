/**
 * @copyright RCAcademy 2024
 * @author RCA <razymusic4@gmail.com>
 */

"use strict";


/**
 * Import
 */
import { ripple } from "./utils/ripple.js";
import { addEventOnElements } from "./utils/event.js"; 


/**
 * Header on-scroll state
 */
const /** {NodeElement} */ $header = document.querySelector('[data-header]');

window.addEventListener('scroll', () => {
  $header.classList[window.scrollY > 50 ? 'add' : 'remove']('active');
});


/**
 * add ripple effect
 */
const /** {NodeList} */ $rippleElems = document.querySelectorAll('[data-ripple]');

$rippleElems.forEach($rippleElem => ripple($rippleElem));


/**
 * navbar toggle for mobile screen
 */
const /** {NodeList} */ $navTogglers = document.querySelectorAll('[data-nav-toggler]');
const /** {NodeElement} */ $navbar = document.querySelector('[data-navigation]');
const /** {NodeElement} */ $scrim = document.querySelector('[data-scrim]');

addEventOnElements($navTogglers, 'click', function() {
  $navbar.classList.toggle('show');
  $scrim.classList.toggle('active');
});


/**
 * filter functionality
 */
window.filterObj = {};


/**
 * initial favorite object in local storage
 */
if (!window.localStorage.getItem('favorite')) {
  const /** {Object} */ favoriteObj = {
    photos: {},
    videos: {}
  }

  window.localStorage.setItem('favorite', JSON.stringify(favoriteObj));
}