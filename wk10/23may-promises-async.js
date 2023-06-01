
const promise1 = Promise.resolve(3); 
const promise2 = 42; 
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo'); 
});

Promise.all([promise1, promise2, promise3])
  .then((result) => {
    console.log(result);
    // expected output: Array [3, 42, "foo"]
  })
  .catch((error) => {
    // This block will not be executed because all promises in the input array are resolved.
    console.log('Error:', error);
  });


 // When Promise.all is invoked, it waits for all the promises to be executed (resolve / reject).
  //Here all the promises are resolved successfully, the catch callback would not be executed.






    document.getElementById('cityForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      
      const parisLat = document.getElementById('parisLat').value;
      const parisLon = document.getElementById('parisLon').value;
      const nyLat = document.getElementById('nyLat').value;
      const nyLon = document.getElementById('nyLon').value;
      
      const urlParis = `https://api.sunrise-sunset.org/json?lat=${parisLat}&lng=${parisLon}`;
      const urlNY = `https://api.sunrise-sunset.org/json?lat=${nyLat}&lng=${nyLon}`;

      const fetchParis = fetch(urlParis).then(response => response.json());
      const fetchNY = fetch(urlNY).then(response => response.json());

      Promise.all([fetchParis, fetchNY])
        .then(data => {
          const sunriseParis = data[0].results.sunrise;
          const sunriseNY = data[1].results.sunrise;

          const resultDiv = document.getElementById('result');
          resultDiv.innerHTML = `Sunrise Time:<br>
            Paris: ${sunriseParis}<br>
            New York: ${sunriseNY}`;
        })
        .catch(error => {
          console.log('Error:', error);
        });
    });
