/**
 * Removes an item from an array.
 * **Note:** This does change the array itself.
 *
 * @param {Array} array - The array to update.
 * @param {Element} element - The item to be removed.
 */
export default function remove(array, element) {
  const index = array.indexOf(element);

  if (index > -1) {
    array.splice(index, 1);
  }
}
