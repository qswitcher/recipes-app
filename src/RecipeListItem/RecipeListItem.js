import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import { withStyles } from "@material-ui/core/styles";

import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router-dom";

const styles = {
    media: {
        height: "300px",
        width: "300px"
    },
    card: {
        maxWidth: "272px",
        margin: "10px 14px"
    }
};

class RecipeListItem extends Component {
    handleRecipeClick = () => {
        const { history, recipeId } = this.props;
        history.push(`/recipes/${recipeId}`);
    };

    render() {
        const { classes, title, photo, description } = this.props;
        return (
            <Card className={classes.card} onClick={this.handleRecipeClick}>
                <CardMedia
                    className={classes.media}
                    image={photo}
                    title={title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography component="p">{description}</Typography>
                </CardContent>
            </Card>
        );
    }
}

export default withRouter(withStyles(styles)(RecipeListItem));
