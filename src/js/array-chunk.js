function arrayChunk(array, number) {
  const { length } = array;
  const chunkSize = Math.ceil(length / number);
  const chunks = new Array(number);
  let i;

  for (i = 0; i < length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }

  return chunks;
}

export default arrayChunk;
