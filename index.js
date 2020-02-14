const fetchBreedDescription = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => { // theres two parameters, second being (error, desc)
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});

