function getCartProducts() {
  var carts = localStorage.getItem("carts");
  carts = JSON.parse(carts);

  carts.forEach(function (cart) {
    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");

    var img = document.createElement("img");
    img.width = "50";
    img.height = "50";
    img.src = cart.image;

    var button = document.createElement("button");
    button.textContent = "remove";

    td1.appendChild(img);
    td2.textContent = cart.name;
    td3.textContent = cart.price;
    td4.textContent = 1;
    td5.appendChild(button);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);

    document.querySelector("tbody").appendChild(tr);
  });
}
