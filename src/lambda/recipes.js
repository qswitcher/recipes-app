const loremIpsum = require("lorem-ipsum");

export function handler(event, context, callback) {
    console.log("queryStringParameters", event.queryStringParameters);
    const wordCount = 15;
    const recipes = [
        {
            title: "Title 1",
            description: loremIpsum({ count: wordCount, units: "words" })
        },
        {
            title: "Title 2",
            description: loremIpsum({ count: wordCount, units: "words" })
        },
        {
            title: "Title 3",
            description: loremIpsum({ count: wordCount, units: "words" })
        },
        {
            title: "Title 4",
            description: loremIpsum({ count: wordCount, units: "words" })
        },
        {
            title: "Title 5",
            description: loremIpsum({ count: wordCount, units: "words" })
        },
        {
            title: "Title 6",
            description: loremIpsum({ count: wordCount, units: "words" })
        },
        {
            title: "Title 7",
            description: loremIpsum({ count: wordCount, units: "words" })
        },
        {
            title: "Title 8",
            description: loremIpsum({ count: wordCount, units: "words" })
        },
        {
            title: "Title 9",
            description: loremIpsum({ count: wordCount, units: "words" })
        }
    ];
    callback(null, {
        statusCode: 200,
        body: JSON.stringify({ recipes })
    });
}
