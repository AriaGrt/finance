const express = require('express');
const path = require('path');
const app = require('./app')
const devHelpers = require('./devHelpers')
const port = process.env.PORT || 5000;
// API calls
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, '../client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}else{
  //dev middleware injection
  app.use(devHelpers.requestLogger)
}

app.listen(port, () => console.log(`Listening on port ${port}`));
