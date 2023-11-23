import { Box, useTheme } from "@mui/material";
import React from "react";
import { ResponsiveLine } from "@nivo/line";
import Line from "./Line";
import Header from "../../Components/Header";

const LineChart = () => {
  const theme = useTheme();
  return (
    <Box pt={7}>
      <Header title="Line Chart" subTitle="Simple Line Chart" /> 

      <Line />
    </Box>
  );
};

export default LineChart;