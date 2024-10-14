

function pizzaOven(crustType, sauceType, cheeses, toppings) {

    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}



var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(pizza1)


var pizza2 = pizzaOven("hand toosed", "marinara", ["mozzarella, feta"], ["mushroom", "olive", "oinion"]);
console.log(pizza2)


var pizza3 = pizzaOven("hand toosed", "white sauce", ["mozzarella"], ["mushroom", "peper", "oinion"]);
console.log(pizza2)

var pizza3 = pizzaOven("deep dish", "tomato", ["mozzarella"], ["basilic", "peper", "oinion"]);
console.log(pizza2)




