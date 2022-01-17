// Variables definition
let priceSize,
  priceCrust,
  priceToppings,
  priceDelivery,
  orderCost,
  orderNumber,
  orderConfirm,
  priceTotal;

// Construct definition
let userForm,
  orderForm,
  userData = [],
  formData = [];
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
  if (document.getElementById("dprice").value == "cbd") {
    priceDelivery = 0;
  } else if (document.getElementById("dprice").value == "hurlingham") {
    priceDelivery = 100;
  } else if (document.getElementById("dprice").value == "westland") {
    priceDelivery = 200;
  } else if (document.getElementById("dprice").value == "south-c") {
    priceDelivery = 200;
  } else if (document.getElementById("dprice").value == "south-b") {
    priceDelivery = 100;
  } else if ((document.getElementById("dprice").value = "kitengela")) {
    priceDelivery = 300;
  } else if (document.getElementById("dprice").value == "utawala") {
    priceDelivery = 200;
  } else if (document.getElementById("dprice").value == "bellewiew") {
    priceDelivery = 200;
  } else if (document.getElementById("dprice").value == "syokimau") {
    priceDelivery = 200;
  } else if (document.getElementById("dprice").value == "donhom") {
    priceDelivery = 200;
  } else {
    priceDelivery = 500;
  }
  return priceDelivery;
}

//  Function to calculate the order price
function orderPrice() {
  sizePrice();
  crustPrice();
  toppingsPrice();
  deliveryPrice();
  orderCost = priceSize + priceCrust + priceToppings; //Calculate order cost without delivery
  priceTotal = priceSize + priceCrust + priceToppings + priceDelivery; //Calculate order cost plus delivery
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
        $("#form-s").hide(function () {
          $("#form1-h").show();
        });
      });

      orderForm = {
        size: document.getElementById("size").value,
        crust: document.getElementById("crust").value,
        toppings: document.getElementById("toppings").value,
        price: priceTotal,
      };
      formData.push(orderForm);
      console.log(formData);
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
