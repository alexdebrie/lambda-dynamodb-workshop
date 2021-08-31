const getClient = require("./client").getClient;

exports.handler = async (event, context) => {
  const response = await getClient()
    .describeTable({ TableName: process.env.TABLE_NAME })
    .promise();
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello, world!",
      table: response,
    }),
  };
};
