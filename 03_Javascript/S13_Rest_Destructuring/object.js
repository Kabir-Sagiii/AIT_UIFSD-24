var data = {
  name: "sid",
  gender: "male",
  email: "sid@gmail.com",
};

var { email, name, gender } = data;

function f1() {
  //   console.log(data.name); //name
  console.log(name);
}

function f2() {
  //email and gender
  //   console.log(data.email, data.gender);
  console.log(email, gender);
}

function f3() {
  //   console.log(data.name); //name
  console.log(name);
}

function f4() {
  //   console.log(data.email); //email
  console.log(email);
}

f1();
f2();
f3();
f4();
