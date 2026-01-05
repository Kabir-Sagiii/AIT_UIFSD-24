function outer() {
  var x = 10;
  return function inner() {
    console.log(x);

    var y = 100;
  };

  console.log(y); // invalid
}

const fn = outer();

fn();
