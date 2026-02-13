const flattenArray = (arr, result = []) => {
  for (item of arr) {
    if (Array.isArray(item)) {
      flattenArray(item, result);
    } else {
      if (!result.includes(item)) {
        result.push(item);
      }
    }
  }
  return result;
};

console.log(flattenArray([[1, [2, 3], [4, [5, 6, 2]], 3]]));
