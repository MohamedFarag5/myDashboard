import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout'
import Navbar from './Components/Navbar'
import { getDesignTokens } from './Components/Theme';
import { useState } from 'react';
import Sidebar from './Components/Sidebar';
import {ThemeProvider,createTheme} from '@mui/material/styles'
import Team from './Pages/team/Team';
import Contacts from './Pages/contacts/Contacts.jsx';
import Invoices from './Pages/invoices/Invoices';
import Form from './Pages/form/Form';
import Calender from './Pages/calender/Calender';
import FAQ from './Pages/faq/FAQ';
import BarChart from './Pages/barChart/BarChart';
import PieChart from './Pages/pie/PieChart';
import LineChart from './Pages/lineChart/LineChart';
import Geography from './Pages/geography/Geography';
import Dashboard from './Pages/dashboard/Dashboard';
import NotFound from './Components/NotFound';
function App() {
  const [mode, setMode] = useState(localStorage.getItem("currentMode")?localStorage.getItem("currentMode"):"light");

  const routes=createBrowserRouter([{
    path:"/",element:<Layout setMode={setMode}/>,children:[{
      path:"navbar",element:<Navbar />},
      {path:"team",element:<Team/>},
    {path:"sidebar",element:<Sidebar/>},
    {path:"contacts",element:<Contacts/>},
    {path:"invoices",element:<Invoices/>},
    {path:"form",element:<Form/>},
    {path:"calendar",element:<Calender/>},
    {path:"faq",element:<FAQ/>},
    {path:"bar",element:<BarChart/>},
    {path:"pie",element:<PieChart/>},
    {path:"line",element:<LineChart/>},
    {path:"geography",element:<Geography/>},
    {path:"/",element:<Dashboard/>},
    {path:"dashboard",element:<Dashboard/>},
    {path:"*",element:<NotFound/>},

    
  ]
  }]);
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return <>
   <ThemeProvider theme={theme}>
  <RouterProvider router={routes}>
  </RouterProvider>
  </ThemeProvider>

  </>
}

export default App
