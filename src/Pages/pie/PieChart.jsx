import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { Box, useTheme } from "@mui/material";
import Pie from "./Pie";
import Header from "../../Components/Header";

const PieChart = () => {
  const theme = useTheme();
  return (
    <Box pt={7}>
      <Header title="Pie Chart" subTitle="Simple Pie Chart" /> 

      <Pie/>
    </Box>
  );
};

export default PieChart;