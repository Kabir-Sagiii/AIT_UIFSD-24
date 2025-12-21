var data = [2, 3, 4, 5, 6];

var newArray = data.map(function (element, index) {
  var square = element * element;

  return square;
});

console.log(newArray);
