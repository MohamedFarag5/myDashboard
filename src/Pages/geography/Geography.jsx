import React from "react";
import { ResponsiveChoropleth } from "@nivo/geo";
import { Box, useTheme } from "@mui/material";
import { geo } from "./world_countries";
import { data } from "./data";
import Geo from "./geo";
import Header from "../../Components/Header";

const Geography = () => {
  const theme = useTheme();
  return (
    <Box pt={7}>
       <Header title="Geography" subTitle="Simple Geography Chart" /> 

      <Geo />
    </Box>
  );
};

export default Geography;