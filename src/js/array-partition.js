function partition(filter) {
  return function partitionReducer(partitions, item) {
    const index = filter(item) ? 0 : 1;

    partitions[index].push(item);

    return partitions;
  };
}

export default partition;
