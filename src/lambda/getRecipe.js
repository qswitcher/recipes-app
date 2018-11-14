import * as dynamoDbLib from "./utils/dynamodb";
import { success, failure } from "./utils/response";
/**
 * Handler for getting a recipe
 * @param {*} event 
 * @param {*} context 
 */
export async function handler(event, context) {
    const params = {
        TableName: "recipes",
        // 'Key' defines the partition key and sort key of the item to be retrieved
        // - 'userId': Identity Pool identity id of the authenticated user
        // - 'recipeId': path parameter
        Key: {
            userId: event.queryStringParameters.userId,
            recipeId: event.queryStringParameters.recipeId
        }
    };

    console.log(params);

    try {
        const result = await dynamoDbLib.call("get", params);
        // Return the matching list of items in response body
        return success(result.Item);
    } catch (e) {
        console.log(e);
        return failure({ status: false });
    }
}
