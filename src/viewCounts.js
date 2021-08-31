const getClient = require("./client").getClient;

exports.handler = async (event, context) => {
  const tag = event.pathParameters.tag;

  const response = await getClient().getItem({
    TableName: process.env.TABLE_NAME,
    Key: {
      'ID': { 'S': tag }
    },
  }).promise()

  let count = 0
  if (response.Item) {
    count = parseInt(response.Item.Count.N)
  }
  return {
    statusCode: 200,
    headers: {
      "Content-type": "text/html"
    },
    body: `<div style="background-color:#34D399;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center">
<h1>The tag "${tag}" has ${count} total visits.</h1>
</div>
    `
  };
};
