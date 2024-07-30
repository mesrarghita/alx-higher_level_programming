#!/usr/bin/node
// prints title of a Star Wars movie where episode number matches a given integer
// Usage: ./100-starwars_characters.js <episode number>

const request = require('request');
const url = 'https://swapi-api.alx-tools.com/api/films/';
const episodeNum = process.argv[2];
request.get(url + episodeNum, function (err, response, body) {
  if (err) {
    console.log(err);
  }
  const data = JSON.parse(body);
  const XterData = data.characters;
  for (const character of XterData) {
    request.get(character, function (err, response, body1) {
      if (err) {
        console.log(err);
      }
      const CharacterName = JSON.parse(body1);
      console.log(CharacterName.name);
    });
  }
});
