import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import CheckList from "../CheckList/CheckList";

const getRecipe = gql`
    query GetRecipe($id: String!) {
        getRecipe(id: $id) {
            id
            photo
            title
            description
            directions
            ingredients
            photo
            prepTime
            cookTime
            readyIn
            recipeYield
        }
    }
`;

const styles = theme => ({
    // btnCreate: {
    //     marginRight: theme.spacing.unit
    // },
    // btnCancel: {
    //     marginRight: theme.spacing.unit
    // }
    recipeImg: {
        width: "100%"
    }
});

class Recipe extends React.Component {
    render() {
        const { classes } = this.props;
        const { id } = this.props.match.params;
        return (
            <Query query={getRecipe} variables={{ id }}>
                {({ loading, error, data }) => {
                    if (loading) {
                        return null;
                    }
                    const recipe = data.getRecipe;
                    return (
                        <Grid container spacing={24}>
                            <Grid item md={6}>
                                <img
                                    className={classes.recipeImg}
                                    alt="food"
                                    src={recipe.photo}
                                />
                            </Grid>
                            <Grid item md={6}>
                                <h1>{recipe.title}</h1>
                                <div>{recipe.description}</div>
                                <h2>Ingredients</h2>
                                <CheckList blob={recipe.ingredients} />
                                <h2>Directions</h2>
                                <CheckList blob={recipe.directions} />
                            </Grid>
                        </Grid>
                    );
                }}
            </Query>
        );
    }
}

export default withStyles(styles)(Recipe);
