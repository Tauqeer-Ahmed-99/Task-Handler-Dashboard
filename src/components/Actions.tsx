import React from "react";
import { Badge, Box, Button } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import AddIcon from "@mui/icons-material/Add";

const Actions = () => {
  return (
    <>
      <Button
        variant="outlined"
        startIcon={<FilterAltIcon />}
        endIcon={
          <Badge
            badgeContent={4}
            color="primary"
            sx={{ pl: "1rem", mr: "1rem" }}
          ></Badge>
        }
        sx={{ mr: "1rem" }}
      >
        Filters
      </Button>
      <Button variant="contained" startIcon={<AddIcon />}>
        CREATE TICKET
      </Button>
    </>
  );
};

export default Actions;
