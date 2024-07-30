#!/usr/bin/node

const request = require('request');

if (process.argv.length !== 3) {
  console.error('Usage: ./6-completed_tasks.js <API URL>');
  process.exit(1);
}

const apiUrl = process.argv[2];

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
  if (response.statusCode !== 200) {
    console.error(`Failed to fetch data, status code: ${response.statusCode}`);
    process.exit(1);
  }

  const tasks = JSON.parse(body);
  const completedTasks = {};

  tasks.forEach(task => {
    if (task.completed) {
      if (completedTasks[task.userId]) {
        completedTasks[task.userId]++;
      } else {
        completedTasks[task.userId] = 1;
      }
    }
  });

  console.log(completedTasks);
});
