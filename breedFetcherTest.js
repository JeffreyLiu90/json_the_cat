const fetchBreedDescription = require('../breedFetcher');
const assert = require('chai').assert;

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (error, desc) => {
      // we expect no error for this scenario
      assert.equal(error, null); // goes back to index, since error is null, it compares the two

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc); //compares if description matches

      done();
    });
  });
  it('returns error description for a wrong breed, via callback', (done) => {
    fetchBreedDescription('Siberiaaaan', (error, desc) => {
      // we expect no error for this scenario
      assert.equal(null, desc); //since it is error, desc is now null

      const expectedError = "Error, cat not found" // this is the error message

      // compare returned description
      assert.equal(expectedError, error);

      done();
    });
    
  });
  
});