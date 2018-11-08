import uuid from "uuid";
import * as dynamoDbLib from "./utils/dynamodb";
import { success, failure } from "./utils/response";

export async function main(event, context) {
    console.log("foo");
    try {
        const data = JSON.parse(event.body);
        const params = {
            TableName: "recipes",
            Item: {
                userId: event.requestContext.identity.cognitoIdentityId,
                recipeId: uuid.v1(),
                // prepTime: data.prepTime,
                // cookTime: data.cookTime,
                // readyIn: data.readyIn,
                // servings: data.servings,
                title: data.title,
                description: data.description,
                // directions: data.directions,
                photo: data.photo,
                // siteUrl: data.siteUrl,
                createdAt: Date.now()
            }
        };

        await dynamoDbLib.call("put", params);
        return success(params.Item);
    } catch (e) {
        console.log(e);
        return failure({ status: false });
    }
}