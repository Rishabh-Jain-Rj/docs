const throttle = (fn, delay) => {
  let timer;
  return (...args) => {
    if (!timer) {
      timer = setTimeout(() => {
        fn(...args);
        timer = null;
      }, delay);
    }
  };
};

const search = (str) => {
  console.log(str);
};
const debouncedSearch = throttle(search, 3000);

debouncedSearch("r");
debouncedSearch("ri");
debouncedSearch("ris");
debouncedSearch("rish");
