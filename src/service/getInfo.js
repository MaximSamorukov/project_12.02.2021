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

function getId(str) {
  const id = str.split(' ')[1].split('-')[1];
  return parseInt(id, 10);
}

module.exports = { getData, getStaticData, getId };