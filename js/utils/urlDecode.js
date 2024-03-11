/**
* @copyright RCAcademy 2024
* @author RCA <razymusic4@gmail.com>
*/

"use strict";


/**
 * convert url to object
 * @param {String} urlString url string
 * @returns {Object} url object
 */
export const urlDecode = urlString => {
  return Object.fromEntries(urlString.replace(/%23/g, '#').replace(/%20/g, '').split('&').map(i => i.split('=')));
}