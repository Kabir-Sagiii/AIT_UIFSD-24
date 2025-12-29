var x = 100;

function f1() {
  var y = 200;
  console.log(x);
}

function f2() {
  let price = 900000;
  console.log(x, y);
  if (true) {
    let name = "kabir";
    const pin = 123;
    var gender = "male";
    console.log(x);
  }
}

f1();
f2();
