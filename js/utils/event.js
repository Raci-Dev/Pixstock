/**
 * @copyright RCAcademy 2024
 * @author RCA <razymusic4@gmail.com>
 */

"use strict";


/**
 * add event on multiple elements
 * @param {NodeList} $elements NodeList
 * @param {String} eventType event type eg. 'click'
 * @param {Function} callback callback function
 */
export const addEventOnElements = function ($elements, eventType, callback) {
  $elements.forEach($element => $element.addEventListener(eventType, callback));
}