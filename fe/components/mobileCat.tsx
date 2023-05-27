import React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Link } from "@mui/material";
import { CategoryContext } from "@/context/categoryContext";
import { useContext, useState } from "react";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";

export default function NestedList() {
  const { subCat, setSubCat, open, setOpen, categoriesData }: any =
    useContext(CategoryContext);
  const [opensub, setopensub] = React.useState(false);
  const handleClick = () => {
    setopensub(!opensub);
  };

  return (
    <List
      className="block lg:hidden md:hidden xl:hidden l:hidden"
      sx={{ width: "100vw", bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleClick}>
        <ListItemText sx={{ color: "#747474" }} primary="Browse by Category" />
        {opensub ? (
          <ExpandLess sx={{ color: "#747474" }} />
        ) : (
          <ExpandMore sx={{ color: "#747474" }} />
        )}
      </ListItemButton>
      <Collapse
        in={opensub}
        timeout="auto"
        unmountOnExit
        sx={{ width: "100vw" }}
      >
        <div className="100vw" color="#747474">
          {categoriesData?.map((e: any, index: any) => (
            <Accordion key={index} elevation={0}>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                color="#747474"
              >
                <Typography color="#747474">{e.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className=" flex flex-col flex-wrap gap-4 p-2  ">
                  {e.subCategory.map((e: any, index: number) => (
                    <Link
                      key={index}
                      href="#"
                      underline="hover"
                      color="#747474"
                    >
                      {e.subtitle}
                    </Link>
                  ))}
                </div>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </Collapse>
    </List>
  );
}
