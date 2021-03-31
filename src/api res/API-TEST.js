const axios = require('axios');

// Make a request for a user with a given ID
axios.get('https://api.warframestat.us/ps4/arbitration')
  .then(function (response) {
console.log('this');    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
