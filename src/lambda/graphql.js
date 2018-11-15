const { ApolloServer, gql } = require("apollo-server-lambda");
const { resolver: recipesResolver } = require("../resolvers/recipes");
const { resolver: getRecipeResolver } = require("../resolvers/getRecipe");

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
    type Recipe {
        prepTime: String
        cookTime: String
        readyIn: String
        recipeYield: String
        id: String
        userId: String
        description: String
        title: String
        ingredients: String
        directions: String
        photo: String
    }

    type Query {
        recipes: [Recipe]
        getRecipe(id: String!): Recipe
    }
`;

// Provide resolver functions for your schema fields
const resolvers = {
    Query: {
        recipes: recipesResolver,
        getRecipe: getRecipeResolver
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});

exports.handler = server.createHandler();
