import React, { Component } from "react";
import GridList from "@material-ui/core/GridList";
import RecipeListItem from "../RecipeListItem/RecipeListItem";
import { withStyles } from "@material-ui/core/styles";
import gql from "graphql-tag";
import { Query } from "react-apollo";

// query RecipeList {
//     getRecipes {
//         id
//         title
//         description
//         photo
//     }
// }
const getRecipes = gql`
    query GetRecipes {
        recipes {
            id
            photo
            title
            description
        }
    }
`;

const styles = {
    grid: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center"
    }
};

class RecipeList extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Query query={getRecipes}>
                {({ loading, error, data }) => {
                    if (loading) {
                        return null;
                    }
                    const { recipes } = data;
                    return (
                        <div className={classes.grid}>
                            <GridList
                                className={classes.grid}
                                cellHeight="auto"
                                cols={4}
                            >
                                {recipes.map((recipe, index) => (
                                    <RecipeListItem key={index} {...recipe} />
                                ))}
                            </GridList>
                        </div>
                    );
                }}
            </Query>
        );
    }
}

export default withStyles(styles)(RecipeList);
