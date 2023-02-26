//------------------EXERCISE 1
const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
console.log(fruits)


//1-Remove Banana from the array.
fruits.splice(0,1);
console.log(fruits);

//2-Sort the array in alphabetical order.
fruits.sort();
console.log(fruits)

//3-Add “Kiwi” to the end of the array.
fruits.push("Kiwi");
console.log(fruits)


//4-Remove “Apples” from the array. Don’t use the same method as in part 1.

fruits.shift();
console.log(fruits)

//5-Sort the array in reverse order. (Not alphabetical, but reverse the current Array i.e. [‘a’, ‘c’, ‘b’] becomes [‘b’, ‘c’, ‘a’])
fruits.reverse();
console.log(fruits);



//------------------EXERCISE 2

/*const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
Access and then console.log “Oranges”.*/

const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(moreFruits[1][1][0]);





