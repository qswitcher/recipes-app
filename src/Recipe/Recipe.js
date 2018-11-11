import React from "react";

class Recipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loading: true, recipe: null };
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.setState({ loading: true });
        fetch(
            `/.netlify/functions/getRecipe?recipeId=${id}&userId=d605bf2e-932d-4bbc-a177-d3517dede42c`
        )
            .then(response => response.json())
            .then(json => this.setState({ loading: false, recipe: json }));
    }

    render() {
        console.log(this.props);
        if (!this.state.loading) {
            return <p>{this.state.recipe.title}</p>;
        }
        return null;
    }
}

export default Recipe;
