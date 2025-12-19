var user = {
  name: "pooja verma",
  gender: "female",
  address: {
    city: "pune",
    state: "MH",
  },
};

console.log(user.address.city);

user.address.city = "mumbai";

console.log(user);
