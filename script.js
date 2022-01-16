// Variables definition 
   let priceSize, priceCrust, priceToppings, PriceTotal

// Function to find Pizza Price based on size
function sizePrice() {
    if(document.getElementById("size").value == "small"){
        priceSize = 500
    }
    else if(document.getElementById("size").value == "medium"){
        priceSize = 1000
    }
    else {
        priceSize = 1500
    }
    return priceSize
}

// Function to find Pizza Price based on crust
// function crustPrice() {
//     if(document.getElementById("crust").value == "crustless"){
//         priceCrust = 0
//     }
//     else if(document.getElementById("crust").value == "flat"){
//         priceCrust = 50
//     }
//     else if(document.getElementById("crust").value == "crispy"){
//         priceCrust = 50
//     }
//     else if(document.getElementById("crust").value == "cracker"){
//         priceCrust = 50
//     }
//     else {
//         priceCrust = 1500
//     }
//     return priceCrust
// }
// //    Function to calculate the order price
// function orderPrice(){
    
// }