// Variables definition
let priceSize,
  priceCrust,
  priceToppings,
  priceDelivery,
  orderCost,
  orderNumber,
  orderConfirm,
  cumulativePrice = 0,
  priceTotal;

// Construct declaration
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
  } else if (document.getElementById("dprice").value == "belleview") {
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
  orderCost = priceSize + priceCrust + priceToppings;
  userForm = {
    size: document.getElementById("size").value,
    crust: document.getElementById("crust").value,
    toppings: document.getElementById("toppings").value,
    // price: orderCost,
  };
  userData = Object.values(userForm);
  console.log(userData);
  console.log(userForm);
  alert(
    "You have picked a " +
      userForm.size +
      " " +
      userForm.crust +
      " " +
      userForm.toppings +
      " pizza. The total charge for your Pizza is " +
      orderCost
  );
  cumulativePrice += orderCost;
  alert("The total cost for Pizza(s) order is Kshs. " + cumulativePrice);
  console.log(cumulativePrice);
  let priceConfirm = confirm("Do you want to make another order?");
  document.getElementById("form").reset();
  if (priceConfirm == true) {
    document.getElementById("form").reset();
  } else {
    orderConfirm = confirm("Do you want your Order Delivered?");
    if (orderConfirm == true) {
      // jQuery to display Delivery option
      $(document).ready(function () {
        $("#form-s").hide(function () {
          $("#form1-h").show();
        });
      });
    } else {
      document.getElementById("form").reset();
      // history.go();
      alert("Your order is ready for pick up from our location");
    }
  }
}

// Function to calculate the total price
function totalOrderPrice() {
  deliveryPrice();

  priceTotal = cumulativePrice + priceDelivery; //Calculate order cost plus delivery
  let finalOrder = " ";
  userData.forEach(orderDetails);
  function orderDetails(value, index, array){
    finalOrder += value + " "
    console.log(finalOrder)
  }
  alert(
    "The total charge for your order Pizza(s) " +
      finalOrder +
      " and its delivery cost is " +
      priceTotal
  );

  document.getElementById("form").reset();
  // history.go();
  alert("Your order will be delivered at your location");
}
