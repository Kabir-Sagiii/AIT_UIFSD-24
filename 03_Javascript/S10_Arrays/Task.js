var data = [2, 3, 4, 5, 6];

// o/p : [4,9,16,25,36]  :   5 minute

//access each eelement : 2
//square it : 4
//new array :[4]

var newarray = [];

data.forEach(function (element) {
  var square = element * element;
  newarray.push(square);
});

console.log(newarray);
