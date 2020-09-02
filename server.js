const express = require("express");
const routes = require('./routes/flight'); // import the routes

const app = express();

app.use(express.json());

app.use('/', routes); // to use the routes

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('App is listening on port ' + listener.address().port)
})
