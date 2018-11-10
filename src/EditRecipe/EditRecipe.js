import React from "react";
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

class EditRecipe extends React.Component {
    state = {
        prepTime: '',
        cookTime: '',
        readyIn: '',
        servings: '',
        recipeYield: '',
        title: '',
        description: '',
        ingredients: '',
        directions: ''
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        });
    };

    handleSubmit = event => {
        fetch(
            "/.netlify/functions/createRecipe",
            {
                method: 'POST',
                body: JSON.stringify({
                    userId: 'd605bf2e-932d-4bbc-a177-d3517dede42c',
                    ...this.state
                })
            }
        )
            .then(response => {
                console.log(response);
                if (response.status > 200) {
                    alert('Something bad happened');
                } else {
                    window.location = '/'
                }
            }).catch((e) => {
                alert('Something bad happened');
                console.log(e);
            });
        event.preventDefault();
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
                                        required
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
                                        required
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
                                        required
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
                                        required
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
                                        label="Ready in"
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
                                        id="recipeYield"
                                        label="Recipe yield"
                                        value={this.state.recipeYield}
                                        onChange={this.handleChange("recipeYield")}
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
                                        onClick={this.handleSubmit}
                                    >
                                        Save
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

export default withStyles(styles)(EditRecipe);
