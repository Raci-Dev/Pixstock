/**
 * @copyright RCAcademy 2024
 * @author RCA <razymusic4@gmail.com>
 */

"use strict";


/**
 * Import
 */
import { ripple } from "./utils/ripple.js"; 


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
 * filter functionality
 */
window.filterObj = {};