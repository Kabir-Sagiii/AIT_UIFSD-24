var data = {
  productId: 101,
  pName: "Iphone 15",
  qty: 3,

  totalPrice: function (price) {
    console.log(3 * price);
  },
  printName: () => {
    console.log("Iphone 15");
  },
};

data.totalPrice(60000);

console.log();
data.printName();
