const axios = require('axios');

function getData() {
  const corsurl = 'https://cors-anywhere.herokuapp.com/';
  const baseURL = `${corsurl}http://btn.bz/api/api.php/`;
  return axios({
    method: 'get',
    baseURL,
  })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
    })
}

function getStaticData() {
  const data = import('../assets/apidata');
  return data;
}

module.exports = { getData, getStaticData };