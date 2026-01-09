const getExponent = (n, limit) => {
  let result = 1;
  for (let i = 1; i <= limit; i++) {
    result *= n;
  }
  return result;
};

console.log(Math.pow(2, 3));
