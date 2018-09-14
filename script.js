/*jshint esversion: 6 */
const endpoint="https://raw.githubusercontent.com/nshntarora/Indian-Cities-JSON/master/cities.json";

const cities=[];

/* Fetch returns a promise 
   The json() method takes a Response stream and returns a promise that resolves with the result of parsing the body text as JSON.
   the pro.json() method again returns a promise
*/
fetch(endpoint)
    .then(rawdata => rawdata.json())
    .then(data => {
        console.log('data:', data);
        cities.push(data);
        console.log('cities', cities);
    })
    .catch(err => console.log("Error occured :"+err));

