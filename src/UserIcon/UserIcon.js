import React from "react";
import gravatarUrl from "gravatar-url";
import Avatar from "@material-ui/core/Avatar";

function UserIcon({ fullname, email }) {
    return <Avatar alt={fullname} src={gravatarUrl(email, { size: 200 })} />;
}

export default UserIcon;
