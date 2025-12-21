var data = [10, 20, 30, 40, 50];

// [30,40,50]  or [10,20]

var filteredArray = data.filter(function (element, index) {
  var status = element > 20;

  return status;
});

console.log(filteredArray);
