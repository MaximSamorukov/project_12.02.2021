const axios = require('axios');

function getData() {
  const baseURL = `http://btn.bz/api/api.php`;
  return axios({
    method: 'get',
    baseURL,
    url: '/',
  })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
    })
}

function getJsonData() {
  const json = import('../assets/data.json');
  return json;
}

function getStaticData() {
  const data = import('../assets/apidata');
  return data;
}

function getId(str) {
  const id = str.split(' ')[1].split('-')[1];
  return parseInt(id, 10);
}

module.exports = { getData, getStaticData, getId, getJsonData };