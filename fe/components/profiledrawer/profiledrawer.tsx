import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import NestedList from "../navbar/nestedlist";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EmailIcon from "@mui/icons-material/Email";
import MenuIcon from "@mui/icons-material/Menu";
import ProfileList from "./profilelist";
const pages = [
  { title: "NOTIFICATIONS", logo: <NotificationsNoneIcon /> },
  { title: "FAVORITES", logo: <FavoriteIcon /> },
  { title: "WORKSTREAM", logo: <EmailIcon /> },
];
const DrawerProfile = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <React.Fragment>
      <Drawer
        PaperProps={{
          sx: {
            width: 240,
            backgroundColor: "#B9CDDA",
          },
        }}
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <ProfileList />
        <List component="div" sx={{ padding: "1rem" }}>
          {pages.map((pages, index) => (
            <ListItemButton sx={{ borderBottom: "1px solid gray" }} key={index}>
              <ListItemIcon>{pages.logo}</ListItemIcon>
              <ListItemText sx={{ color: "#555555", gap: 1 }}>
                {pages.title}
              </ListItemText>
            </ListItemButton>
          ))}
        </List>
        <NestedList />
      </Drawer>
      <IconButton
        sx={{ marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon sx={{ color: "white" }} />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerProfile;
