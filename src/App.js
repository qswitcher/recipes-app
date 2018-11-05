import React, { Component } from "react";
import RecipeList from "./RecipeList/RecipeList";
import RecipesAppBar from "./RecipesAppBar/RecipesAppBar";
import NewRecipe from "./NewRecipe/NewRecipe";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";

const styles = {
    app: {
        backgroundColor: "#e6e6e6"
    },
    siteContent: {
        backgroundColor: "white",
        maxWidth: "1270px",
        margin: "0 auto",
        minHeight: "100vh"
    }
};

class App extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.app}>
                <div className={classes.siteContent}>
                    <Router>
                        <div>
                            <RecipesAppBar />
                            <Route exact path="/" component={RecipeList} />
                            <Route path="/new-recipe" component={NewRecipe} />
                        </div>
                    </Router>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(App);
