import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { Box, useTheme } from "@mui/material";
import Bar from "./Bar";
import Header from "../../Components/Header";

const BarChart = () => {
  const theme = useTheme();
  return (
    <Box pt={8}>
       <Header
        title="Bar Chart"
        subTitle="The minimum wage in Germany, France and Spain (EUR/month)"
      /> 
      <Bar/>
    </Box>
  );
};

export default BarChart;