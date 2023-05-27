import React, { useState } from "react";
import NestedList from "./nestedlist";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  colors,
  Button,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
const pages = ["HOW IT WORKS", "LOG IN", "SIGN UP"];
const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <React.Fragment>
      <Drawer
        PaperProps={{
          sx: {
            width: 240,
            backgroundColor: "#ffffff",
          },
        }}
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <NestedList />
        <List sx={{ padding: "1rem" }}>
          {pages.map((page, index) => (
            <ListItemButton sx={{ borderBottom: "1px solid gray" }} key={index}>
              <ListItemText sx={{ color: "#555555" }}>{page}</ListItemText>
            </ListItemButton>
          ))}
          <Button
            sx={{ mt: 3, color: "#555555", ml: 4, bgcolor: "red" }}
            variant="contained"
            color="warning"
          >
            POST PROJECT
          </Button>
        </List>
      </Drawer>
      <IconButton
        sx={{ marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon sx={{ color: "#777777" }} />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
