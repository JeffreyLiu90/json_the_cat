const request = require('request');
const breedName = process.argv.slice(2);
let url = "https://api.thecatapi.com/v1/breeds/search?q=";

const fetchBreedDescription = function(breedName, callback) { // from index, we called Sibe
  request(`${url}${breedName}`, (error, response, body) => { // go to that url, end of url which is 'q=' you add sibe which will go to the page with Siberian cat info
    if (error) return callback(error, null); // if something goes wrong, it becomes error i.e. url is broken
    const data = JSON.parse(body); // parse the data into object
    if (data.length === 0) { // if the cat doesn't exist, create a call back labeled (erro,null, because in index.js theres two parameters, so if it is error, it will become error, and desc becomes null). it returns empty array if its wrong cat name
      error = "Error, cat not found";
      callback(error, null);
    } else {
      callback(null, data[0].description.trim()); // if cat is found, error becomes null and description is cat's description
    }
  });
};





// fetchBreedDescription(breedName, (error, desc) => {
//   if (error) {
//     console.log('Error fetch details:', error);
//   } else {
//     console.log(desc);
//   }
// });


module.exports = fetchBreedDescription;