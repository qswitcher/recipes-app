import * as dynamoDbLib from "../utils/dynamodb";

export async function resolver(root, { id }) {
    const userId = "d605bf2e-932d-4bbc-a177-d3517dede42c";

    const params = {
        TableName: "recipes",
        // 'Key' defines the partition key and sort key of the item to be retrieved
        // - 'userId': Identity Pool identity id of the authenticated user
        // - 'recipeId': path parameter
        Key: {
            userId,
            recipeId: id
        }
    };

    const result = await dynamoDbLib.call("get", params);
    // Return the matching list of items in response body
    return { ...result.Item, id };
}
