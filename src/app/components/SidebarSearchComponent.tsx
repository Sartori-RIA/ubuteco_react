import {MagnifyingGlassIcon} from "@heroicons/react/24/outline";
import React from "react";
import {Input} from "@material-tailwind/react";

export default function SidebarSearchComponent() {
    return <>
        <div className="p-2">
            <Input icon={<MagnifyingGlassIcon className="h-5 w-5"/>} label="Search"/>
        </div>
    </>
}