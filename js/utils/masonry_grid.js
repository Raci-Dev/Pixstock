/**
 * @copyright RCAcademy 2024
 * @author RCA <razymusic4@gmail.com>
 */

"use strict";


/**
 * initial columns
 * @param {Node} $gridContainer grid container
 * @returns {Object} column & columns height array
 */
export const gridInit = function ($gridContainer) {

  const /** {NodeList} */ $columns = [];
  const /** {Array} */ columnsHeight = [];

  const /** {Number} */ columnCount = Number(getComputedStyle($gridContainer).getPropertyValue('--column-count'));

  for (let i = 0; i < columnCount; i++) {
    const /** {NodeElement} */ $column = document.createElement('div');
    $column.classList.add('column');
    $gridContainer.appendChild($column);
    $columns.push($column);
    columnsHeight.push(0);
  }

  return { $columns, columnsHeight };

}


/**
 * update masonry grid
 * @param {Node} $card grid item
 * @param {Array} columnsHeight height of all columns
 * @param {NodeList} $columns all columns
 */
export const updateGrid = function ($card, columnsHeight, $columns) {

  const /** {Number} */ minColumnHeight = Math.min(...columnsHeight);
  const /** {Number} */ minColumnIndex = columnsHeight.indexOf(minColumnHeight);

  $columns[minColumnIndex].appendChild($card);
  columnsHeight[minColumnIndex] = $columns[minColumnIndex].offsetHeight;

}