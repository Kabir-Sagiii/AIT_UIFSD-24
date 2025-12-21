var data = [
  { pname: "Iphone 16", brand: "Apple" },
  { pname: "Iphone 15", brand: "Apple" },
  { pname: "Galaxy S23", brand: "Samsung" },
  { pname: "Galaxy S24", brand: "Samsung" },
];

var products = data.filter(function (element) {
  var result = element.brand == "Apple";

  return result;
});

console.log(products);
