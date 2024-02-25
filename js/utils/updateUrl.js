/**
 * @copyright RCAcademy 2024
 * @author RCA <razymusic4@gmail.com>
 */

"use strict";


/**
 * Import
 */
import { urlEncode } from "./urlEncode.js"; 


/**
 * update url
 * @param {Object} filterObj filter object
 * @param {String} searchType search type eg. 'videos' or 'photos' 
 */
export const updateUrl = (filterObj, searchType) => {
  setTimeout(() => {
    const /** {String} */ root = window.location.origin;
    const /** {String} */ searchQuery = urlEncode(filterObj);

    window.location = `${root}/pages/${searchType}/${searchType}.html?${searchQuery}`;
  }, 500);
}