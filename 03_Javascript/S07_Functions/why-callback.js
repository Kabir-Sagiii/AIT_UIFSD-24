function f1(fn) {
  //100
  //fn()
  //50
}

function f2(fn) {
  //30
  //fn()
  //50
}

function f3(fn) {
  //80
  //fn()
  //100
}

function fn200() {
  //200
}

f1(fn200);
f2(fn200);
f3(fn200);
