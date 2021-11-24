const express = require('express')
const app = express()
const port = 3000
// Creating a local webserver to be able to call the FT headline API on my local machine //

app.listen(port, () => {
    console.log(`Example of a server running at http://localhost:${port}`)
})
// Checking that the local host website server is running
app.get ('/', (req, res) => {
    
    res.send('Hello! Everything is working fine!')
  })

  
// querying the FT API via the POST command using the node.js axios method
// This example POST request searches for any title's including 'Brexit' with the most recent article first
var axios = require('axios');
var data = JSON.stringify({"queryString":"title:\"Brexit\"","queryContext":{"curations":["ARTICLES"]},"resultContext":{"aspects":["title","lifecycle","location","summary","editorial"],"sortOrder":"DESC","sortField":"initialPublishDateTime"}});

var config = {
  method: 'post',
  // Hide this API key with an enviroment variable once functioning
  url: '//Insert Key Here',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

// display the API response in JSON in the console. My difficulty has been storing and displaying
// this data on the website as I have only been able to access the API via this local web server but I cannot work out
// how to then store and display this on the front end of the site.
axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
