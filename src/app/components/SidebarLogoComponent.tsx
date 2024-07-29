import React from "react";
import {Typography} from "@material-tailwind/react";

export default function SidebarLogComponent() {
    return <>
        <div className="mb-2 flex items-center gap-4 p-4">
            <img src="https://docs.material-tailwind.com/img/logo-ct-dark.png" alt="brand" className="h-8 w-8" />
            <Typography variant="h5" color="blue-gray">
                Sidebar
            </Typography>
        </div>
    </>
}