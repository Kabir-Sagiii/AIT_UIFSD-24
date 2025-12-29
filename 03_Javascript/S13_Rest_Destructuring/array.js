var data = [10, 20, 30, 40, 50];

var [x, y, z, a, b] = data;

function f1() {
  //30
  console.log(data[2]);
  console.log(z);
}

function f2() {
  //10 50
  console.log(data[0], data[4]);
  console.log(x, b);
}

function f3() {
  //20
  console.log(data[1]);
  console.log(y);
}

function f4() {
  //30 20
  console.log(data[2], data[1]);
  console.log(z, y);
}

f1();
f2();
f3();
f4();
