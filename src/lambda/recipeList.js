import * as dynamoDbLib from "./utils/dynamodb";
import { success, failure } from "./utils/response";
/**
 * Handler for getting recipes
 * @param {*} event 
 * @param {*} context 
 */
export async function handler(event, context) {
    const queryParams = event.queryStringParameters;

    const params = {
        TableName: "recipes",
        // 'KeyConditionExpression' defines the condition for the query
        // - 'userId = :userId': only return items with matching 'userId'
        //   partition key
        // 'ExpressionAttributeValues' defines the value in the condition
        // - ':userId': defines 'userId' to be Identity Pool identity id
        //   of the authenticated user
        KeyConditionExpression: "userId = :userId",
        ExpressionAttributeValues: {
            ":userId": queryParams.userId
        }
    };

    try {
        const result = await dynamoDbLib.call("query", params);
        // Return the matching list of items in response body
        return success({ recipes: result.Items });
    } catch (e) {
        console.log(e);
        return failure({ status: false });
    }
}
