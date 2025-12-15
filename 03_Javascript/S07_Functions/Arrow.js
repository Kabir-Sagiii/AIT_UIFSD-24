var x = (a, b) => {
  console.log("---------s", a, b);
  return "hello";
};

var str = x(10, 20);
console.log(str);

function f1(f) {
  console.log("f1");
  f();
}

f1(() => {
  console.log("Arrow");
});
