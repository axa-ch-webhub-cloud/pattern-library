/**
 * Turns an array into an array of chunks.
 *
 * @param {Array} array - The array to be chunked.
 * @param {Number} number - Chunk size.
 * @returns {Array} - Returns a chunked array.
 */
function arrayChunk(array, number) {
  const { length } = array;

  if (!length) {
    return array;
  }

  const chunkSize = Math.ceil(length / number);
  const chunks = new Array(number);
  let i;

  for (i = 0; i < length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }

  return chunks;
}

export default arrayChunk;
