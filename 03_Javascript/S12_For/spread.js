var obj1 = {
  name: "sagar",
  gender: "male",
  city: "pune",
};

var obj2 = {
  ...obj1,
  email: "sagar@gmail.comc",
};

console.log(obj1);
console.log(obj2);

var arr1 = [10, 20, 30];

var arr2 = [...arr1];

console.log(arr1);
console.log(arr2);
