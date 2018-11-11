import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";

class CheckList extends React.Component {
    render() {
        const { blob } = this.props;
        return (
            <List>
                {blob.split("\n").map((line, index) => (
                    <ListItem key={index} role={undefined} dense button>
                        <Checkbox tabIndex={-1} disableRipple />
                        <ListItemText primary={line} />
                    </ListItem>
                ))}
            </List>
        );
    }
}

export default CheckList;
