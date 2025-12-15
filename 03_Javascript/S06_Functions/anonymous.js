var fn = function () {
  console.log("anonymous function is called");
};

fn();

function getUser(x) {
  x();
}

getUser(function () {
  console.log("i am argument");
});
