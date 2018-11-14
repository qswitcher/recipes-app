import uuid from "uuid";
import * as dynamoDbLib from "./utils/dynamodb";
import { success, failure } from "./utils/response";

/**
 * Handler for creating a recipe
 * @param {*} event 
 */
export async function handler(event) {
    try {
        const data = JSON.parse(event.body);
        const item = {
            recipeId: uuid.v1(),
            createdAt: Date.now()
        };

        Object.entries(data).forEach((pair) => {
            if (pair[1] !== '' && pair[1] !== null && pair[1] !== undefined) {
                item[pair[0]] = pair[1];
            }
        });

        const params = {
            TableName: "recipes",
            Item: item
        };

        await dynamoDbLib.call("put", params);
        return success(params.Item);
    } catch (e) {
        console.log(e);
        return failure({ status: false });
    }
}
