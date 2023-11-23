import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";
import { columns, rows } from "./data";
import Header from "../../Components/Header";

const Contacts = () => {
  return (
    <Box pt={7}>
      
      <Header
        title="CONTACTS"
        subTitle="List of Contacts for Future Reference"
      />
      <Box sx={{ height: "100vh", width: "99%", mx: "auto" }}>
        <DataGrid
          slots={{
            toolbar: GridToolbar,
          }}
          rows={rows}
          // @ts-ignore
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default Contacts;