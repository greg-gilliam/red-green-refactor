
const capitalizeAndFilter = (arr) => {
  const newArr = arr.map((item) => {
    const arrDown = item.toLowerCase();
    const arrUp = arrDown.charAt(0).toUpperCase() + arrDown.slice(1); 
    return arrUp;
  });
  return newArr.filter((item) => item.charAt(0) != 'F');
};


module.exports = capitalizeAndFilter;
