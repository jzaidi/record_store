const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const morgan = require('morgan');
const cors = require('cors');
const artistRoutes = require('./routes/artists');
const songRoutes = require('./routes/songs');

app.use(cors());
app.use(express.json()); // Body parser!
app.use(morgan('combined'));

app.get('/', (request, response) => {
  response.send('Welcome to my Record Store.');
});

app.use('/artists', artistRoutes);
app.use('/songs', songRoutes);

app.use((error, request, response, next) => {
  console.error(error.stack);
  response.status(500).send("Internal server error.");
});

app.use((request, response, next) => {
  response.status(404).send("Not found.");
});

app.listen( PORT, () => {
  console.log(`Artists and Songs: listening on port no. ${PORT}...`);
});
