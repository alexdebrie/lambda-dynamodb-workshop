const getClient = require("./client").getClient;

const COUNTER_KEY = "COUNTER"

exports.handler = async (event, context) => {
  const filteredRecords = event.Records.filter((record) => {
    return (record.eventName === "INSERT" || record.eventName === "MODIFY") &&
            record.dynamodb.Keys.ID.S !== COUNTER_KEY
  })

  await getClient().updateItem({
    TableName: process.env.TABLE_NAME,
    Key: {
      'ID': { 'S': COUNTER_KEY }
    },
    UpdateExpression: "SET #totalViews = if_not_exists(#totalViews, :zero) + :inc",
    ExpressionAttributeNames: {
      "#totalViews": "TotalViews"
    },
    ExpressionAttributeValues: {
      ":inc": { "N": filteredRecords.length.toString() },
      ":zero": { "N": "0" }
    }
  }).promise()
};
