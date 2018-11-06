import loremIpsum from "lorem-ipsum";
import * as dynamoDbLib from "./utils/dynamodb";
import { success, failure } from "./utils/response";

export async function handler(event, context, callback) {
    const queryParams = event.queryStringParameters;
    // const wordCount = 15;
    // const recipes = [
    //     {
    //         title: "Title 1",
    //         description: loremIpsum({ count: wordCount, units: "words" })
    //     },
    //     {
    //         title: "Title 2",
    //         description: loremIpsum({ count: wordCount, units: "words" })
    //     },
    //     {
    //         title: "Title 3",
    //         description: loremIpsum({ count: wordCount, units: "words" })
    //     },
    //     {
    //         title: "Title 4",
    //         description: loremIpsum({ count: wordCount, units: "words" })
    //     },
    //     {
    //         title: "Title 5",
    //         description: loremIpsum({ count: wordCount, units: "words" })
    //     },
    //     {
    //         title: "Title 6",
    //         description: loremIpsum({ count: wordCount, units: "words" })
    //     },
    //     {
    //         title: "Title 7",
    //         description: loremIpsum({ count: wordCount, units: "words" })
    //     },
    //     {
    //         title: "Title 8",
    //         description: loremIpsum({ count: wordCount, units: "words" })
    //     },
    //     {
    //         title: "Title 9",
    //         description: loremIpsum({ count: wordCount, units: "words" })
    //     }
    // ];
    // callback(null, {
    //     statusCode: 200,
    //     body: JSON.stringify({ recipes })
    // });
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
        return success(result.Items);
    } catch (e) {
        return failure({ status: false });
    }
}
