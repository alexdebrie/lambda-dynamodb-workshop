const getClient = require("./client").getClient;

exports.handler = async (event, context) => {
  const tag = event.pathParameters.tag;

  await getClient().updateItem({
    TableName: process.env.TABLE_NAME,
    Key: {
      'ID': { 'S': tag }
    },
    UpdateExpression: "SET #count = if_not_exists(#count, :zero) + :inc",
    ExpressionAttributeNames: {
      "#count": "Count"
    },
    ExpressionAttributeValues: {
      ":inc": { "N": "1" },
      ":zero": { "N": "0" }
    }
  }).promise()
  return {
    statusCode: 200,
    headers: {
      "Content-type": "text/html"
    },
    body: `<div style="background-color:#34D399;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center">
<h1>YOUR VISIT COUNTS.</h1>
<h2><a href="/Prod/counts/${tag}">Check the count for the tag "${tag}" here.</a></h2>
</div>
    `
  };
};
