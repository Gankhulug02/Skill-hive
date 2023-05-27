import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";

import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LogoutIcon from "@mui/icons-material/Logout";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PaymentIcon from "@mui/icons-material/Payment";

import { Typography, MenuItem } from "@mui/material";

export default function ProfileList() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const settings = [
    { title: "Profile", logo: <AccountBoxIcon /> },
    { title: "Post offer", logo: <AccessTimeIcon /> },
    { title: "Payment", logo: <PaymentIcon /> },
    { title: "Log out", logo: <LogoutIcon /> },
  ];

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "#B9CDDA" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleClick}>
        <ListItemText sx={{ color: "#067BC2" }} primary="PROFILE" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {settings.map((setting) => (
            <MenuItem
              sx={{
                p: 2,
                maxwidth: "350px",
                minWidth: "300px",
                borderBottom: "1px solid gray",
              }}
              key={setting.title}
              onClick={handleCloseUserMenu}
            >
              {setting.logo}
              <Typography textAlign="center" padding={1}>
                {setting.title}
              </Typography>
            </MenuItem>
          ))}
        </List>
      </Collapse>
    </List>
  );
}
