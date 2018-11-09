import React from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const styles = theme => ({
    // btnCreate: {
    //     marginRight: theme.spacing.unit
    // },
    // btnCancel: {
    //     marginRight: theme.spacing.unit
    // }
});

class NewRecipe extends React.Component {
    state = {
        prepTime: null,
        cookTime: null,
        readyIn: null,
        servings: null,
        yield: null,
        title: null,
        description: null,
        ingredients: null,
        directions: null
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        });
    };

    render() {
        const { classes } = this.props;
        return (
            <div>
                <form
                    className={classes.container}
                    noValidate
                    autoComplete="off"
                >
                    <Grid container spacing={24}>
                        <Grid item sm={8}>
                            <Grid container spacing={8}>
                                <Grid item xs={12}>
                                    <TextField
                                        id="title"
                                        label="Recipe Title"
                                        value={this.state.title}
                                        onChange={this.handleChange("title")}
                                        className={classes.rightColumnTextField}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="description"
                                        label="Description"
                                        placeholder="Description"
                                        multiline
                                        className={classes.rightColumnTextField}
                                        value={this.state.description}
                                        onChange={this.handleChange(
                                            "description"
                                        )}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="ingredients"
                                        label="Ingredients"
                                        placeholder="Put each ingredient on its own line"
                                        multiline
                                        className={classes.rightColumnTextField}
                                        value={this.state.ingredients}
                                        onChange={this.handleChange(
                                            "ingredients"
                                        )}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="directions"
                                        label="Directions"
                                        placeholder="Put each step on its own line"
                                        multiline
                                        className={classes.rightColumnTextField}
                                        value={this.state.directions}
                                        onChange={this.handleChange(
                                            "directions"
                                        )}
                                        fullWidth
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sm={4}>
                            <Grid container spacing={8}>
                                <Grid item xs={12} lg={6}>
                                    <TextField
                                        id="prepTime"
                                        label="Prep time"
                                        value={this.state.prepTime}
                                        onChange={this.handleChange("prepTime")}
                                        className={classes.textField}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <TextField
                                        id="cookTime"
                                        label="Cook time"
                                        value={this.state.cookTime}
                                        onChange={this.handleChange("cookTime")}
                                        className={classes.textField}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <TextField
                                        id="readyIn"
                                        label="Ready in (Optional)"
                                        value={this.state.readyIn}
                                        onChange={this.handleChange("readyIn")}
                                        className={classes.textField}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <TextField
                                        id="servings"
                                        label="Number of servings"
                                        value={this.state.servings}
                                        onChange={this.handleChange("servings")}
                                        className={classes.textField}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <TextField
                                        id="yield"
                                        label="Recipe yield (Optional)"
                                        value={this.state.yield}
                                        onChange={this.handleChange("yield")}
                                        className={classes.textField}
                                        fullWidth
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={8}>
                                <Grid item xs={12} sm={3} md={2}>
                                    <Button
                                        className={classes.btnCreate}
                                        variant="contained"
                                        color="secondary"
                                        size="large"
                                        fullWidth
                                    >
                                        Create
                                    </Button>
                                </Grid>
                                <Grid item xs={12} sm={3} md={2}>
                                    <Button
                                        variant="contained"
                                        className={classes.btnCancel}
                                        size="large"
                                        fullWidth
                                    >
                                        Cancel
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
            </div>
        );
    }
}

export default withStyles(styles)(NewRecipe);
