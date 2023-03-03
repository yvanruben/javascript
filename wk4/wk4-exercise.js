

//----------Exercise 1
let x = 5;
let y = 2;
if (x>y){
console.log("x is greater than y");}
else {
    console.log('y is smaller')
}


//----------Exercise 2

let newDog ='Chihuahua';
//display how many letters are in newDog.

console.log(newDog.length);

//Display the newDog variable in uppercase and then in lowercase (no need to create new variables, just console.log twice).
console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase())

/*Check if the variable newDog is equal to “Chihuahua”
if it does, display ‘I love Chihuahuas, it’s my favorite dog breed’
else, console.log ‘I dont care, I prefer cats’*/

if (newDog==="Chihuahua"){
    console.log('I love Chihuahuas, it’s my favorite dog breed');}
    else{
        console.log('I dont care, I prefer cats');

    }

//----------Exercise 3
    //Prompt the user for a number and save it to a variable.

    let num= prompt('Enter a number: ');
    //Check whether the variable is even or odd.
    if(num % 2 === 0) {
        alert('The number is even.');
    }
    
    // if the number is odd
    else {
        alert('The number is odd.');
    }



//----------Exercise 4
const users=['paul','sam','jane','dimi'];
console.log (users.length);
 if( users.length ===0) {
    console.log('no one is online');
}

//If there is 1 user, console.log “<name_user> is online”.

else if( users.length ===1) {
    console.log(`${users[0]} is online`);

}

//if there are 2 users, console.log “<name_user1> and <name_user2> are online”.

else if( users.length ===2) {
    console.log(users);
}

//If there are more than 2 users, console.log the first two names in the users array and the number of additional users online.  (name_user1, name_user2 and 3 more are online)

else if(users.length>2){
    remUserOnline=users.length-2;
    console.log(remUserOnline);
    console.log(users[0]+ ', ' + users[1] + ' and '+ remUserOnline + ' additional users online')

}