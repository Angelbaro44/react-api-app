const axios = require('axios');

componentDidMount() {
  

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
}

  export default data;
