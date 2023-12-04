import { useState } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Link, Outlet } from "react-router-dom";

export function AdminLayout() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <>
      <div className="flex relative bg-gray-100">
        <Card
          color="white"
          className="h-[100vh] rounded-none rounded-r-md w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-100 relative"
        >
          <div className="mb-2 p-4">
            <Typography variant="h5" color="blue-gray">
              Adminnistador
            </Typography>
            <List>
              <ListItem>
                <ListItemPrefix>
                  <PresentationChartBarIcon className="h-5 w-5" />
                </ListItemPrefix>
                <Link to="/admin">Dashboard</Link>
              </ListItem>
              <Accordion
                open={open === 1}
                icon={
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`mx-auto h-4 w-4 transition-transform ${
                      open === 1 ? "rotate-180" : ""
                    }`}
                  />
                }
              >
                <ListItem className="p-0" selected={open === 1}>
                  <AccordionHeader
                    onClick={() => handleOpen(1)}
                    className="border-b-0 p-3"
                  >
                    <ListItemPrefix>
                      <ShoppingBagIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    <Typography
                      color="blue-gray"
                      className="mr-auto font-normal"
                    >
                      E-Commerce
                    </Typography>
                  </AccordionHeader>
                </ListItem>
                <AccordionBody className="py-1">
                  <List className="p-0">
                  <Link to="orders"><ListItem>Ordenes</ListItem></Link>
                  <Link to="products"><ListItem>Productos</ListItem></Link>
                  </List>
                </AccordionBody>
              </Accordion>
              <Link to="inbox">
                <ListItem>
                  <ListItemPrefix>
                    <InboxIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  Inbox
                </ListItem>
              </Link>
              <Link to="profile">
                <ListItem>
                    <ListItemPrefix>
                      <UserCircleIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Perfil
                </ListItem>
              </Link>
              <ListItem>
                <ListItemPrefix>
                  <PowerIcon className="h-5 w-5" />
                </ListItemPrefix>
                Log Out
              </ListItem>
            </List>
          </div>
        </Card>
        <div className="h-[100vh] overflow-y-scroll p-4 w-full">
          <Outlet />
        </div>
      </div>
    </>
  );
}
