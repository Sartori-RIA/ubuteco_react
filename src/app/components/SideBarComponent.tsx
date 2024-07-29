import React from "react";
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    Card,
    List,
    ListItem,
    ListItemPrefix,
    Typography,
} from "@material-tailwind/react";
import {
    Cog6ToothIcon,
    PowerIcon,
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
} from "@heroicons/react/24/solid";
import {ChevronDownIcon,} from "@heroicons/react/24/outline";
import SidebarItemComponent from "@/app/components/SidebarItemComponent";
import SidebarLogComponent from "@/app/components/SidebarLogoComponent";
import SidebarSearchComponent from "@/app/components/SidebarSearchComponent";
import SidebarCustomIconComponent from "@/app/components/SidebarCustomIconComponent";

export function SideBarComponent() {
    const [open, setOpen] = React.useState(0);
    const [openAlert, setOpenAlert] = React.useState(true);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    return (
        <Card className="h-100vh w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
            <SidebarLogComponent/>
            <SidebarSearchComponent/>
            <List>
                <Accordion
                    open={open === 1}
                    icon={
                        <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
                        />
                    }
                >
                    <ListItem className="p-0" selected={open === 1}>
                        <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
                            <ListItemPrefix>
                                <PresentationChartBarIcon className="h-5 w-5"/>
                            </ListItemPrefix>
                            <Typography color="blue-gray" className="mr-auto font-normal">
                                Dashboard
                            </Typography>
                        </AccordionHeader>
                    </ListItem>
                    <AccordionBody className="py-1">
                        <List className="p-0">
                            <SidebarItemComponent text="Analytics"/>
                            <SidebarItemComponent text="Reporting"/>
                        </List>
                    </AccordionBody>
                </Accordion>
                <Accordion
                    open={open === 2}
                    icon={
                        <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`}
                        />
                    }
                >
                    <ListItem className="p-0" selected={open === 2}>
                        <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
                            <ListItemPrefix>
                                <ShoppingBagIcon className="h-5 w-5"/>
                            </ListItemPrefix>
                            <Typography color="blue-gray" className="mr-auto font-normal">
                                E-Commerce
                            </Typography>
                        </AccordionHeader>
                    </ListItem>
                    <AccordionBody className="py-1">
                        <List className="p-0">
                            <SidebarItemComponent text="Makers"/>
                            <SidebarItemComponent text="Users"/>
                            <SidebarItemComponent text="Customers"/>
                            <SidebarItemComponent text="Beers"/>
                            <SidebarItemComponent text="Beer Styles"/>
                            <SidebarItemComponent text="Wines"/>
                            <SidebarItemComponent text="Wines Styles"/>
                            <SidebarItemComponent text="Drinks"/>
                            <SidebarItemComponent text="Dishes"/>
                            <SidebarItemComponent text="Orders"/>
                            <SidebarItemComponent text="Kitchen"/>
                        </List>
                    </AccordionBody>
                </Accordion>
                <hr className="my-2 border-blue-gray-50"/>
                <SidebarCustomIconComponent text="Profile" icon={<UserCircleIcon className="h-5 w-5"/>}/>
                <SidebarCustomIconComponent text="Settings" icon={<Cog6ToothIcon className="h-5 w-5"/>}/>
                <SidebarCustomIconComponent text="Log Out" icon={<PowerIcon className="h-5 w-5"/>}/>
            </List>
        </Card>
    );
}