function changeColor() {
  //   var pDom1 = document.querySelector("#p1");
  //   var pDom2 = document.querySelector("#p2");
  //   var pDom3 = document.querySelector("#p3");
  //   pDom1.style.color = "red";
  //   pDom2.style.color = "green";
  //   pDom3.style.color = "blue";
  //   var pDomCollections = document.querySelectorAll("p");
  //   pDomCollections[0].style.color = "blue";
  //   pDomCollections[1].style.color = "Red";
  //   pDomCollections[2].style.color = "green";

  var pDomCollection = document.querySelectorAll(".red");

  //   pDomCollection[0].style.color = "Red";
  //   pDomCollection[1].style.color = "red";

  for (var domElement of pDomCollection) {
    domElement.style.color = "red";
  }
}
