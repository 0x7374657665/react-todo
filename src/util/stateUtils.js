const getArrayWithItemReplaced = (arr, newItem, targetIndex) => [
  ...arr.slice(0, targetIndex),
  newItem,
  ...arr.slice(targetIndex + 1)
];

export { getArrayWithItemReplaced };
