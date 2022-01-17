// Variables definition
let priceSize,
  priceCrust,
  priceToppings,
  orderCost,
  orderNumber,
  orderConfirm,
  deliveryPrice,
  priceTotal;

// Construct definition
let userForm,
  userData = [];
// Function to find Pizza Price based on size
function sizePrice() {
  if (document.getElementById("size").value == "small") {
    priceSize = 500;
  } else if (document.getElementById("size").value == "medium") {
    priceSize = 1000;
  } else {
    priceSize = 1500;
  }
  return priceSize;
}

// Function to find Pizza Price based on crust
function crustPrice() {
  if (document.getElementById("crust").value == "crustless") {
    priceCrust = 0;
  } else if (document.getElementById("crust").value == "flat") {
    priceCrust = 50;
  } else if (document.getElementById("crust").value == "crispy") {
    priceCrust = 50;
  } else if (document.getElementById("crust").value == "cracker") {
    priceCrust = 50;
  } else if (document.getElementById("crust").value == "stuffed") {
    priceCrust = 60;
  } else if (document.getElementById("crust").value == "glutten-free") {
    priceCrust = 100;
  } else {
    priceCrust = 50;
  }
  return priceCrust;
}

// Function to find Pizza Price based on Toppings
function toppingsPrice() {
  if (document.getElementById("toppings").value == "plain") {
    priceToppings = 0;
  } else if (document.getElementById("toppings").value == "pepperoni") {
    priceToppings = 100;
  } else if (document.getElementById("toppings").value == "mushroom") {
    priceToppings = 50;
  } else if (document.getElementById("toppings").value == "extra-cheese") {
    priceToppings = 50;
  } else if (document.getElementById("toppings").value == "sausage") {
    priceToppings = 50;
  } else if (document.getElementById("toppings").value == "onion") {
    priceToppings = 60;
  } else if (document.getElementById("toppings").value == "black-olives") {
    priceToppings = 100;
  } else if (document.getElementById("toppings").value == "green-pepper") {
    priceToppings = 150;
  } else if (document.getElementById("toppings").value == "fresh-garlic") {
    priceToppings = 60;
  } else if (document.getElementById("toppings").value == "tomato") {
    priceToppings = 60;
  } else {
    priceToppings = 150;
  }
  return priceToppings;
}

// Fuction to find Pizza Delivery Price
function deliveryPrice() {
  
}

//  Function to calculate the order price
function orderPrice() {
  sizePrice();
  crustPrice();
  toppingsPrice();
  orderCost = priceSize + priceCrust + priceToppings;
  alert("Your total charge for your Pizza is " + orderCost);
  let priceConfirm = confirm("Do you want to make another order?");
  if (priceConfirm == true) {
    userForm = {
      size: document.getElementById("size").value,
      crust: document.getElementById("crust").value,
      toppings: document.getElementById("toppings").value,
      price: orderCost,
    };
    userData.push(userForm);
    console.log(userData);
    document.getElementById("form").reset();
  } else {
    userForm = {
      size: document.getElementById("size").value,
      crust: document.getElementById("crust").value,
      toppings: document.getElementById("toppings").value,
      price: orderCost,
    };
    userData.push(userForm);
    console.log(userData);
    orderConfirm = confirm("Do you want your Order Delivered?");
    if (orderConfirm == true) {
      // jQuery to display Delivery option
      $(document).ready(function () {
        $("#form").hide(function () {
          $("#form1").show();
        });
      });
    } else {
      document.getElementById("form").reset();
      alert("Your order is and you could pick from our location");
    }
  }
}

// jQuery to reset form when order is canceled
$(document).ready(function () {
  $(".modal-footer").click(function () {
    $("#form").trigger("reset");
    $("#form1").trigger("reset", function () {
      window.location.href("index.html");
    });
  });
});
