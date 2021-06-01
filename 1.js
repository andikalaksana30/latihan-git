function removeDupliate(array) {
  // Check if we are dealing with an Array that is not empty
  if (!array || !Array.isArray(array) || array.length === 0) {
    return array;
  }

  // Return a Array of unique values thanks to the Set
  return [...new Set(array)];
}

var data = removeDupliate("alagcgcdodol");

console.log(data);