const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, function(error, response, body) {
    if (error) {
      callback(error, null);
      return;
    }

    const data = JSON.parse(body);

    if (data.length > 0) {
      const firstEntry = data[0];
      callback(null, firstEntry.description);
    } else {
      callback('Breed not found.', null);
    }
  });
};

const breedName = process.argv[2];
fetchBreedDescription(breedName, function(error, description) {
  if (error) {
    console.error('Error:', error);
  } 
});

module.exports = { fetchBreedDescription }