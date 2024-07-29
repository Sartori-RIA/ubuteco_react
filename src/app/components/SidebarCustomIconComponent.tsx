import React from "react";
import {ListItem, ListItemPrefix} from "@material-tailwind/react";

export default function SidebarCustomIconComponent(props: { text: string, icon: any }) {
    return <>
        <ListItem>
            <ListItemPrefix>
                {props.icon}
            </ListItemPrefix>
            {props.text}
        </ListItem>
    </>
}