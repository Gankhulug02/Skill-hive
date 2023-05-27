import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { Pagination } from "@mui/material";
import FreelancersBody from "@/components/freelancersPage/freelancersBody";
import FreelancerHeader from "@/components/freelancersPage/freelancerHeader";
import axios from "axios";

const Freelancers = () => {
  return (
    <>
      <Box sx={{ background: "#F0F2EF" }}>
        <FreelancerHeader />
        <FreelancersBody />
        <Pagination count={10} size="large" sx={{ margin: "" }} />
      </Box>
    </>
  );
};

export default Freelancers;
