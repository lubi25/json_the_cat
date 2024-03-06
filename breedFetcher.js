const request = require('request');

function fetchBreedDescription(breed) {

  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

  request(url, function(_, _, body) {

    const data = JSON.parse(body);

    const bodyText = data[0];

    console.log(bodyText.description);
  });
}

const breed = process.argv[2];
fetchBreedDescription(breed);