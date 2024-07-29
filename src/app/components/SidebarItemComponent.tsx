import {ChevronRightIcon} from "@heroicons/react/24/outline";
import React from "react";
import {ListItem, ListItemPrefix} from "@material-tailwind/react";

export default function SidebarItemComponent(props: { text: string }) {
    return <>
        <ListItem>
            <ListItemPrefix>
                <ChevronRightIcon strokeWidth={3} className="h-3 w-5"/>
            </ListItemPrefix>
            {props.text}
        </ListItem>
    </>
}