//Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object. Use the forEach method.


let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}


console.log(groceries.fruits);
let displayGroceries= ()=> {
   groceries.forEach{
    console.log(groceries.fruits);
    
   };

};

