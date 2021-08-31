const AWS = require("aws-sdk");

let client = null;

exports.getClient = () => {
  if (client) return client;
  client = new AWS.DynamoDB({
    httpOptions: {
      connectTimeout: 1000,
      timeout: 1000,
    },
  });
  return client;
};
