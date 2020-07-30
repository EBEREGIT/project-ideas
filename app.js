const express = require('express');

const app = express();

// mongoDB connect
mongoose.connect('mongodb+srv://will:<PASSWORD>@cluster0-pme76.mongodb.net/test?retryWrites=true')
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });

app.use((request, response) => {
    response.json({ message: 'Welcome to Project Ideas' });  
});

module.exports = app;