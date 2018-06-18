const isEmptyFragment = fragment => !fragment || (typeof fragment === 'object' && fragment.length === 0);

export default isEmptyFragment;
