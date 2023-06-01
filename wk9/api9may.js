// const getJoke= ()=>{

// // Use Chuck Norris API : https://api.chucknorris.io/
// // Retrieve a random chuck joke in JSON format : https://api.chucknorris.io/jokes/random

// // 1. Create a new XMLHttpRequest object
// let xhr = new XMLHttpRequest();
// xhr.responseType ='json'

// // 2. Configure it: GET-request for the URL 
// xhr.open('GET', 'https://api.chucknorris.io/jokes/random?category=animal');

// // 3. Send the request over the network
// xhr.send();

// // 4. This will be called after the response is received
// xhr.onload = function() {
//   if (xhr.status != 200) { // analyze HTTP status of the response
//     alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
//   } else { // show the result
//     // console.log(`Done ${xhr.response}`); // response is the server
//     console.log(`Done ${xhr.response.value}`); // response is the server
//   }
// };


// xhr.onerror = function() {
//   alert("Request failed");
// };
// }

// getJoke();


const getJoke = () => {
    // Use Chuck Norris API: https://api.chucknorris.io/
    // Retrieve a random chuck joke in JSON format: https://api.chucknorris.io/jokes/random
  
    // 1. Create a new XMLHttpRequest object
    let xhr = new XMLHttpRequest();
    xhr.responseType = "json";
  
    // 2. Configure it: GET-request for the URL
    xhr.open("GET", "https://api.chucknorris.io/jokes/random?category=animal");
  
    // 3. Send the request over the network
    xhr.send();
  
    // 4. This will be called after the response is received
    xhr.onload = function () {
      if (xhr.status != 200) {
        // analyze HTTP status of the response
        alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
      } else {
        // show the result
        const joke = xhr.response.value;
        const popup = document.createElement("div");
        popup.innerText = joke;
        popup.style.backgroundColor = "#f2f2f2";
        popup.style.padding = "20px";
        popup.style.border = "1px solid #ccc";
        popup.style.position = "absolute";
        popup.style.top = "50%";
        popup.style.left = "50%";
        popup.style.transform = "translate(-50%, -50%)";
        popup.style.zIndex = "999";
        document.body.appendChild(popup);
  
        // Remove the popup after 3 seconds
        setTimeout(() => {
          document.body.removeChild(popup);
        }, 3000);
      }
    };
  
    xhr.onerror = function () {
      alert("Request failed");
    };
  };
  
  const button = document.getElementById("get-joke-button");
  button.addEventListener("click", getJoke);
  