#!/usr/bin/node

const request = require('request');
const fs = require('fs');

if (process.argv.length !== 4) {
  console.error('Usage: ./5-request_store.js <URL> <file path>');
  process.exit(1);
}

const url = process.argv[2];
const filePath = process.argv[3];

request(url, (error, response, body) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
  if (response.statusCode !== 200) {
    console.error(`Failed to fetch page, status code: ${response.statusCode}`);
    process.exit(1);
  }
  fs.writeFile(filePath, body, 'utf8', (err) => {
    if (err) {
      console.error(`Failed to write to file: ${err.message}`);
      process.exit(1);
    }
    console.log(`Content successfully written to ${filePath}`);
  });
});
