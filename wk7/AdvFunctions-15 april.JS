//Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object. Use the forEach method.


let client = "John";



const groceries = {
    fruits: ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice: "20$",
    other: {
      payed: true,
      meansOfPayment: ["cash", "creditCard"]
    }
  };
  
  const displayGroceries = () => {
    groceries.fruits.forEach(fruit => {
      console.log(fruit);
    });
  };
  
  displayGroceries();
 


  // Clone groceries object
const cloneGroceries = () => {
    let user = client; // user variable is a copy of client variable
    client = "Betty"; // Changing client variable to "Betty"
    let shopping = { ...groceries }; // Cloning groceries object to shopping object
  
    groceries.totalPrice = "35$"; // Changing totalPrice key in groceries object
    groceries.other.payed = false; // Changing payed key in other object of groceries object
  
    console.log("client: ", client); 
    console.log("user: ", user);  //User variable passed by value
    console.log("groceries.totalPrice: ", groceries.totalPrice); 
    console.log("shopping.totalPrice: ", shopping.totalPrice);
    console.log("groceries.other.payed: ", groceries.other.payed); 
    console.log("shopping.other.payed: ", shopping.other.payed); 
  
  };
  
  displayGroceries(); // Output: pear, apple, banana
  cloneGroceries(); // Output: client: Betty, user: John, groceries.totalPrice: 35$, shopping.totalPrice: 20$, groceries.other.payed: false, shopping.other.payed: false
  
  
  
  
  