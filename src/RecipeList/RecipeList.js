import React, { Component } from "react";
import GridList from "@material-ui/core/GridList";
import RecipeListItem from "../RecipeListItem/RecipeListItem";
import { withStyles } from "@material-ui/core/styles";
import loremIpsum from "lorem-ipsum";

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
        const wordCount = 20;
        const recipes = [
            {
                title: "Title 1",
                description: loremIpsum({ count: wordCount, units: "words" })
            },
            {
                title: "Title 2",
                description: loremIpsum({ count: wordCount, units: "words" })
            },
            {
                title: "Title 3",
                description: loremIpsum({ count: wordCount, units: "words" })
            },
            {
                title: "Title 4",
                description: loremIpsum({ count: wordCount, units: "words" })
            },
            {
                title: "Title 5",
                description: loremIpsum({ count: wordCount, units: "words" })
            },
            {
                title: "Title 6",
                description: loremIpsum({ count: wordCount, units: "words" })
            },
            {
                title: "Title 7",
                description: loremIpsum({ count: wordCount, units: "words" })
            },
            {
                title: "Title 8",
                description: loremIpsum({ count: wordCount, units: "words" })
            },
            {
                title: "Title 9",
                description: loremIpsum({ count: wordCount, units: "words" })
            }
        ];
        return (
            <div className={classes.grid}>
                <GridList
                    className={classes.grid}
                    cellHeight="auto"
                    cols={4}
                    alignContent={"center"}
                >
                    {recipes.map((recipe, index) => (
                        <RecipeListItem key={index} {...recipe} />
                    ))}
                </GridList>
            </div>
        );
    }
}

export default withStyles(styles)(RecipeList);
