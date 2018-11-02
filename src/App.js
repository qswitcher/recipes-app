import React, { Component } from "react";
import RecipeList from "./RecipeList/RecipeList";
import RecipesAppBar from "./RecipesAppBar/RecipesAppBar";

import { withStyles } from "@material-ui/core/styles";

class LambdaDemo extends Component {
    constructor(props) {
        super(props);
        this.state = { loading: false, msg: null };
    }

    handleClick = e => {
        e.preventDefault();

        this.setState({ loading: true });
        fetch("/.netlify/functions/hello")
            .then(response => response.json())
            .then(json => this.setState({ loading: false, msg: json.msg }));
    };

    render() {
        const { loading, msg } = this.state;

        return (
            <p>
                <button onClick={this.handleClick}>
                    {loading ? "Loading..." : "Call Lambda"}
                </button>
                <br />
                <span>{msg}</span>
            </p>
        );
    }
}

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
