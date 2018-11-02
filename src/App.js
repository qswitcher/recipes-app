import React, { Component } from "react";
import RecipeList from "./RecipeList/RecipeList";
import RecipesAppBar from "./RecipesAppBar/RecipesAppBar";

import { withStyles } from "@material-ui/core/styles";

const styles = {
    app: {
        backgroundColor: "#e6e6e6"
    },
    siteContent: {
        backgroundColor: "white",
        maxWidth: "1270px",
        margin: "0 auto"
    }
};

class App extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.app}>
                <div className={classes.siteContent}>
                    <RecipesAppBar />
                    <RecipeList />
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(App);
