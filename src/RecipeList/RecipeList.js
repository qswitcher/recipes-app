import React, { Component } from "react";
import GridList from "@material-ui/core/GridList";
import RecipeListItem from "../RecipeListItem/RecipeListItem";
import { withStyles } from "@material-ui/core/styles";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const getRecipes = gql`
    {
        recipes {
            id
            title
            description
            photo
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
    constructor(props) {
        super(props);
        this.state = { loading: true, recipes: [] };
    }

    // componentDidMount() {
    //     this.setState({ loading: true });
    //     fetch(
    //         "/.netlify/functions/recipes?userId=d605bf2e-932d-4bbc-a177-d3517dede42c"
    //     )
    //         .then(response => response.json())
    //         .then(json =>
    //             this.setState({ loading: false, recipes: json.recipes })
    //         );
    // }

    render() {
        const { classes } = this.props;
        // const { recipes } = this.state;
        return (
            <Query query={getRecipes}>
                {({ loading, error, data }) => {
                    if (loading) {
                        return null;
                    }
                    console.log(data);
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
