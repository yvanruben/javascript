//------------------EXERCISE 1

// const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// console.log[moreFruits [1][1],[0]];



let breakfast = "bread";
console.log('I eat ' + breakfast+ ' every morning');

//------------------EXERCISE 2

const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
const seriesLength = myWatchedSeries.length;
const myWatchedSeriesSentence = ` ${myWatchedSeries[0]}, ${myWatchedSeries[1]}, and ${myWatchedSeries[2]}` ;

//console.log(myWatchedSerieSentence);
console.log ('I like the '+ seriesLength + ' series: ' + myWatchedSeriesSentence)


//Change the series “the big bang theory” to “friends”.
myWatchedSeries.splice(2,1,'friends');
console.log(myWatchedSeries)


//Add, at the End of the array, the name of another series you watched.
myWatchedSeries.push('rex');
console.log(myWatchedSeries)


//Add, at the Beginning of the array, the name of your favorite series.
myWatchedSeries.splice(0,0,'dark knight');
console.log(myWatchedSeries)


//Delete the series “black mirror”.
myWatchedSeries.splice(1,1);
console.log(myWatchedSeries)

//Console.log the third letter of the series “money heist”.
console.log(myWatchedSeries[1].charAt(2));

//Finally, console.log the myWatchedSeries array
console.log(myWatchedSeries);



//------------------EXERCISE 3

//Store a celsius temperature into a variable.

let cTemp = 20;
 let cToFahr = cTemp * 9 / 5 + 32;
  let message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);

    

//------------------EXERCISE 4

    let c;
    let a = 34;
    let b = 21;

    //console.log(a+b) //first expression
    // Prediction:sum= 55 as 34 + 24
    // Actual:

    a = 2;

    //console.log(a+b) //second expression
    // Prediction:sum=23  as 2+21
    // Actual:


//What is the value of c? 
//Prediction: undefined- value of c is unknown
console.log(c)

//4- console.log(3 + 4 + '5');
//Prediction: 75 as 3+4=7 and 5 is a string
console.log(3 + 4 + '5');



//------------------EXERCISE 5
typeof(15)
// Prediction: integer it a number
// Actual:number
console.log (typeof(15));

typeof(5.5)
// Prediction:number 5.5 type is a number
// Actual:number
console.log (typeof(5.5));

typeof(NaN)
// Prediction:undefined as it already a predefined value in javascript
// Actual:NaN
console.log ((NaN));

typeof("hello")
// Prediction:String 
// Actual:string
console.log (typeof("hello"));

typeof(true)
// Prediction:boolean - it true and flase are called boolean
// Actual:boolean

console.log (typeof(true));

typeof(1 != 2)
// Prediction:true  1 is smaller tha 2 which is true
// Actual:boolean
console.log (typeof(1 != 2));


"hamburger" + "s"
// Prediction:hamburgers- hamburger wil merge with the s as + used (concatenate)
// Actual:hamburgers
console.log ("hamburger" + "s");

"1" + "3"
// Prediction:13 -both strings  no addition
// Actual:13
console.log ("1" + "3");

"1" - "3"
// Prediction:1-3 -both strings  no substraction
// Actual:-2
console.log ("1" - "3");

"johnny" + 5
// Prediction:johnny5 -will add 5 to johnny 
// Actual:johnny5
console.log ("johnny" + 5);

"johnny" - 5
// Prediction:johnny-5  no subtraction possible will ads it at the back
// Actual:NaN
console.log ("johnny" - 5);

99 * "hello"
// Prediction:Nan string and number cant be multiply
// Actual:Nan
console.log (99 * "hello");

1 != 1
// Prediction:boolean the logic is true  1=1
// Actual:false

console.log (1 != 1);

1 == "1"
// Prediction:true  == checking if similar value but not type
// Actual:true
console.log (1 == "1");

1 === "1"
// Prediction:false ==== checking type and value
// Actual:false
console.log (1 === "1");


//------------------EXERCISE 6

5 + "34"
// Prediction:undefined as number and string can't be added
// Actual:534
console.log (5 + "34");


5 - "4"
// Prediction:undefined undefined as number and string can't be substracted
// Actual:1

console.log (5 - "4");


10 % 5
// Prediction:0 -  modulos can be done both numbers
// Actual:0

console.log (10 % 5);

5 % 10
// Prediction:2 - modulos can be done both numbers
// Actual:5

console.log (5 % 10);

"Java" + "Script"
// Prediction:JavaScript - erge both strings together
// Actual:JavaScript

console.log ("Java" + "Script");

" " + " "
// Prediction: add double space 
// Actual:empty

console.log (" " + " ");

" " + 0
// Prediction: 0 left space then 0
// Actual: 0
console.log (" " + 0);

true + true
// Prediction: truetrue  merge both strings together
// Actual:2

console.log (true + true);

true + false
// Prediction:2- as they are not between ""
// Actual:1

console.log (true + false);

false + true
// Prediction:1 as false is 0 and true 1
// Actual:1

console.log (false + true);

false - true
// Prediction:-1 as 0-1
// Actual:

console.log (false - true);

!true
// Prediction:Nan as doen't make sense
// Actual:false

console.log (!true);

3 - 4
// Prediction:-1 as 3 is smaller
// Actual:-1

console.log (3 - 4);

"Bob" - "bill"
// Prediction:Nan not numbers
// Actual:NaN
console.log ("Bob" - "bill");