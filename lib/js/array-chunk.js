/**
 * Turns an array into an array of chunks.
 *
 * @param {Array} array - The array to be chunked.
 * @param {Number} number - Chunk size.
 * @returns {Array} - Returns a chunked array.
 */
function arrayChunk(array, number) {
  var length = array.length;


  if (!length) {
    return array;
  }

  var chunkSize = Math.ceil(length / number);
  var chunks = new Array(number);
  var i = void 0;

  for (i = 0; i < length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }

  return chunks;
}

export default arrayChunk;