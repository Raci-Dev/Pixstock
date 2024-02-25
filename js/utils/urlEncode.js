/**
* @copyright RCAcademy 2024
* @author RCA <razymusic4@gmail.com>
*/

"use strict";


/**
 * convert object to url
 * @param {Object} urlObj url object
 * @returns url string
 */
export const urlEncode = urlObj => {
  return Object.entries(urlObj).join("&").replace(/,/g, "=").replace(/#/g, "%23");
}