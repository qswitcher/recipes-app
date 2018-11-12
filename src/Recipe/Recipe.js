import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const getRecipe = gql`
    query GetRecipe($id: String!) {
        getRecipe(id: $id) {
            id
            photo
            title
            description
        }
    }
`;

class Recipe extends React.Component {
    render() {
        const { id } = this.props.match.params;
        return (
            <Query query={getRecipe} variables={{ id }}>
                {({ loading, error, data }) => {
                    if (loading) {
                        return null;
                    }
                    const recipe = data.getRecipe;
                    return <p>{recipe.title}</p>;
                }}
            </Query>
        );
    }
}

export default Recipe;
