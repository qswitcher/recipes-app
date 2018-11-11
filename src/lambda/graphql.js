const { ApolloServer, gql } = require("apollo-server-lambda");
const { recipesResolver } = require("./resolvers/recipes");

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
    type Recipe {
        prepTime: String
        cookTime: String
        readyIn: String
        recipeYield: String
        recipeId: String
        userId: String
        description: String
        title: String
        ingredients: String
        directions: String
    }

    type Query {
        recipes: [Recipe]
    }
`;

// Provide resolver functions for your schema fields
const resolvers = {
    Query: {
        recipes: recipesResolver
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});

exports.handler = server.createHandler();
