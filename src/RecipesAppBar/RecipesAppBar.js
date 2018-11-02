import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import AccountCircle from "@material-ui/icons/AccountCircle";

const styles = {
    root: {
        flexGrow: 1
    },
    grow: {
        flexGrow: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    }
};

class RecipesAppBar extends Component {
    state = {
        anchorEl: null,
        user: null
    };

    componentDidMount() {
        window.netlifyIdentity.on("init", user => this.setState({ user }));
        window.netlifyIdentity.on("login", user => this.setState({ user }));
        window.netlifyIdentity.on("logout", user =>
            this.setState({ user: null })
        );
        const user = window.netlifyIdentity.currentUser();
        if (user) {
            console.log(user);
            this.setState({ user });
        }
    }

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    handleAddRecipe = () => {
        console.log("add recipe");
    };

    handleLogin = () => {
        window.netlifyIdentity.open();
    };

    render() {
        const { classes } = this.props;
        const { anchorEl, user } = this.state;
        const open = Boolean(anchorEl);

        console.log(user);
        return (
            <AppBar position="static">
                <Toolbar>
                    {/* <IconButton
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="Menu"
                    >
                        <MenuIcon />
                    </IconButton> */}
                    <Typography
                        variant="h6"
                        color="inherit"
                        className={classes.grow}
                    >
                        Tasty Recipes
                    </Typography>

                    {!user && (
                        <Button color="inherit" onClick={this.handleLogin}>
                            Login
                        </Button>
                    )}
                    {user && (
                        <div>
                            <IconButton
                                aria-owns={open ? "menu-appbar" : undefined}
                                aria-haspopup="true"
                                onClick={this.handleMenu}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right"
                                }}
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right"
                                }}
                                open={open}
                                onClose={this.handleClose}
                            >
                                <MenuItem onClick={this.handleAddRecipe}>
                                    Add Recipe
                                </MenuItem>
                            </Menu>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        );
    }
}

export default withStyles(styles)(RecipesAppBar);
