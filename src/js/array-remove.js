/**
 * Removes an item from an array.
 * **Note:** This does change the array itself.
 *
 * @param array - The array to update.
 * @param element - The item to be removed.
 */
export default function remove(array, element) {
  const index = array.indexOf(element);

  if (index > -1) {
    array.splice(index, 1);
  }
}
