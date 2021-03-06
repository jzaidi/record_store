// controllers/artists.js

const artistModel = require('../models/artist');

const readAll = (request, response) => {
  const artists = artistModel.readAll();
  response.send(artists);
}

const readIndividual = (request, response) => {
  const artist = artistModel.readIndividual(request.params.id);
  response.send(artist);
}

const create = (request, response) => {
  const artist = artistModel.create(request.body);
  response.send(artist);
}

const update = (request, response) => {
  const artist = artistModel.update(request.params.id, request.body);
  response.send(artist);
}

const destroy = (request, response) => {
  const artist = artistModel.destroy(request.params.id);
  response.send(artist);
}

module.exports = {
  readAll,
  readIndividual,
  create,
  update,
  destroy
};
