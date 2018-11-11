import * as dynamoDbLib from "../utils/dynamodb";
import { success, failure } from "../utils/response";

export async function resolver() {
    const userId = "d605bf2e-932d-4bbc-a177-d3517dede42c";

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
            ":userId": userId
        }
    };

    try {
        const result = await dynamoDbLib.call("query", params);
        // Return the matching list of items in response body
        return success(
            result.Items.map(item => ({ ...item, id: item.recipeId }))
        );
    } catch (e) {
        console.log(e);
        return failure({ status: false });
    }
}
