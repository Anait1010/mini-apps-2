const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
// const axios = require('axios');

const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/public')));

// axios.get('https://api.coindesk.com/v1/bpi/historical/close.json') {
//   .then((response) => {
//   console.log('RESPONSE', response)
// })
//     .catch((error) => {
//       console.log('Error', error)
//     })
// }

app.listen(port, console.log(`Listening on port ${port}`));

