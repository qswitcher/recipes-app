import AWS from "aws-sdk";
require("dotenv").config();

export function call(action, params) {
    const dynamoDb = new AWS.DynamoDB.DocumentClient({
        region: process.env.AWS_REGION,
        credentials: {
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
        }
    });

    return dynamoDb[action](params).promise();
}
