import {
    Box,
    IconButton,
    Paper,
    Stack,
    Typography,
    useTheme,
  } from "@mui/material";
  import React from "react";
  import { DownloadOutlined } from "@mui/icons-material";
  import { Transactions } from "./data";
import Line from "../lineChart/Line";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

  const Row2 = () => {
    const theme = useTheme();
    return (
    //   <Stack direction={"row"} flexWrap={"wrap"} gap={1.2} mt={1.3}  >
    <Grid container spacing={1} mt={2}>
        <Grid xs={12} sm={8}>
        <Paper sx={{  flexGrow: 1,lg:{maxWidth:"1100px" },xs:{maxWidth:"900px"}}}>
          <Stack 
            alignItems={"center"}
            direction={"row"}
            flexWrap={"wrap"}
            justifyContent={"space-between"}
          >
            <Box>
              <Typography
                color={theme.palette.secondary.main}
                mb={1}
                mt={2}
                ml={4}
                variant="h6"
                fontWeight={"bold"}
              >
                Revenue Generated
              </Typography>
              <Typography variant="body2" ml={4}>
                $59,342.32
              </Typography>
            </Box>
  
            <Box>
              <IconButton sx={{ mr: 3 }}>
                <DownloadOutlined />
              </IconButton>
            </Box>
          </Stack>
  
          <Line isDahboard={true} />
        </Paper></Grid>
        <Grid xs={12} sm={4}>
        <Box
          sx={{
            overflow: "auto",
            borderRadius: "4px",
            maxHeight: 355,
            flexGrow: 1,
           lg:{maxWidth:"1100px",minWidth:"400px"},
           xs:{maxWidth:"900px",minWidth:"900px"},
          }}
        >
          <Paper>
            <Typography
              color={theme.palette.secondary.main}
              fontWeight={"bold"}
              p={1.2}
              variant="h6"
            >
              Recent Transactions
            </Typography>
          </Paper>
  
          {Transactions.map((item,index) => {
            return (
              <Paper key={index}
                sx={{
                  mt: 0.4,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box p={1} width={"50px"}>
                  <Typography variant="body1">{item.txId}</Typography>
                  <Typography variant="body2">{item.user} </Typography>
                </Box>
                <Typography ml={3}  variant="body1" sx={{textAlign:"center"}}>{item.date} </Typography>
  
                <Typography
                  borderRadius={1.4}
                  p={1}
                  bgcolor={theme.palette.error.main}
                  color={theme.palette.getContrastText(theme.palette.error.main)}
                  variant="body2"
                  sx={{width:"80px",textAlign:"center",marginRight:"1px"}}
                >
                  ${item.cost}
                </Typography>
              </Paper>
            );
          })}
        </Box></Grid></Grid>
    );
  };
  
  export default Row2;