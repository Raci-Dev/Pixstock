/**
 * @copyright RCAcademy 2024
 * @author RCA <razymusic4@gmail.com>
 */

"use strict";


/**
 * import
 */
import { client } from "../../js/api_configure.js";
import { gridInit, updateGrid } from "../../js/utils/masonry_grid.js";
import { photoCard } from "../../js/photo_card.js";
import { videoCard } from "../../js/video_card.js";
import { urlDecode } from "../../js/utils/urlDecode.js";


/**
 * render collection medias
 */
const /** {NodeElement} */ $collectionGrid = document.querySelector('[data-collection-grid]');
const /** {NodeElement} */ $title = document.querySelector('[data-title]');
const /** {Object} */ collectionGrid = gridInit($collectionGrid);
const /** {Number} */ perPage = 30;
let /** {Number} */ currentPage = 1;
let /** {Number} */ totalPage = 0;
const /** {Object} */ collectionObj = urlDecode(window.location.search.slice(1));

$title.textContent = `${collectionObj.title} colecciones`;
document.title = `${collectionObj.title} colecciones`;


/**
 * @param {Number} page Current page
 */
const loadCollection = function (page) {

  client.collections.detail(collectionObj.collectionId, { per_page: perPage, page: page }, data => {

    console.log(data);

    totalPage = Math.ceil(data.total_results / perPage);

    data.media.forEach(item => {

      let /** {NodeElement} */ $card;

      switch (item.type.toLowerCase()) {
        case 'photo':
          $card = photoCard(item);
          break;
        case 'video':
          $card = videoCard(item);
          break;
      }

      updateGrid($card, collectionGrid.columnsHeight, collectionGrid.$columns);

      isLoaded = true;
      if (currentPage >= totalPage) $loader.style.display = 'none';

    });

  });

}

loadCollection(currentPage);


/**
 * load more collections
 */
const /** {NodeElement} */ $loader = document.querySelector('[data-loader]');
let /** {Boolean} */ isLoaded = true;

window.addEventListener('scroll', function() {

  if ($loader.getBoundingClientRect().top < (window.innerHeight * 2) && currentPage <= totalPage && isLoaded) {

    currentPage++;
    loadCollection(currentPage);
    isLoaded = false;

  }
  
});