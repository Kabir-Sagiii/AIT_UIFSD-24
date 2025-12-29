function fnTask() {
  var x = 10;

  function fnInner() {
    console.log("Inner Function is executed");
  }

  return [x, fnInner];
}

var value = fnTask();
console.log(value[0]);
value[1]();

console.log("               ");

var [x, fnInner] = fnTask();
console.log(x);
fnInner();
