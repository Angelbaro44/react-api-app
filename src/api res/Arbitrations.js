const axios = require('axios');

function setData(res){
  var data;

 data = res;
console.log(data);
return data
}

async function getData(url) {
    const response = await axios.get(url);
     setData(response);
 }
  
  getData('https://api.warframestat.us/ps4')

  export default getData('https://api.warframestat.us/ps4');
