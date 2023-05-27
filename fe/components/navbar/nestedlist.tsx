import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import SearchIcon from "@mui/icons-material/Search";

export default function NestedList() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "#ffffff" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <SearchIcon sx={{ color: "#067BC2" }} />
        </ListItemIcon>
        <ListItemText sx={{ color: "#067BC2" }} primary="SEARCH" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton>
            <ListItemText
              sx={{
                color: "#067BC2",
                borderBottom: "1px solid black",
                paddingLeft: "1rem",
              }}
              primary="Search offer"
              secondary="to buy now"
            />
          </ListItemButton>
          <ListItemButton sx={{ color: "#067BC2" }}>
            <ListItemText
              sx={{
                color: "#067BC2",
                borderBottom: "1px solid black",
                paddingLeft: "1rem",
              }}
              primary="Search Freelancer"
              secondary="to request a"
            />
          </ListItemButton>
          <ListItemButton sx={{}}>
            <ListItemText
              sx={{
                color: "#067BC2",
                borderBottom: "1px solid black",
                paddingLeft: "1rem",
              }}
              primary="Search Project"
              secondary="to quite on"
            />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
