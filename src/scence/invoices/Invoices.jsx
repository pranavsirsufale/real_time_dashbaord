import React from 'react'
import { Box } from '@mui/material'
import Header from '../../components/Header'
import { DataGrid } from '@mui/x-data-grid'

function Invoices() {
  return (
    <Box 
    m='20px'
    >
      <Header

      title='Invoices List'
      subtitle='Company Invoices'
      />

      <Box 
      m='40px'
        height='50vh'
        // sx={{
        //     "& .MuiDataGrid-root": {
        //         border : "none"
        //     },
        //     "& .MuiDataGrid-cell":{
        //         borderBottom : "none"
        //     },
        //     "& .name-column--cell":{
        //         color : colors.greenAccent[300]
        //     },
        //     "& .MuiDataGrid-columnHeader":{
        //         backgroundColor : colors.blueAccent[700],
        //         borderBottom : "none"
        //     },
        //     "& .MuiDataGrid-columnSeparator--sideRight":{
        //         backgroundColor : colors.blueAccent[700]
        //     },
        //     "& .MuiDataGrid-scrollbarFiller" : {
        //         backgroundColor : colors.blueAccent[700]
        //     }
        //     ,
        //     "& .MuiDataGrid-virtualScroller" : {
        //         backgroundColor : colors.primary[400]
        //     },
        //     "& .MuiDataGrid-footerContainer":{
        //          borderTop : "none",
        //          backgroundColor : colors.blueAccent[700]
        //     },
        //     "& .MuiDataGrid-toolbarContainer .MuiButton-text" : {
        //         color : `${colors.greay[100]} !important`
        //     }
        // }}

        >

        

      </Box>
    </Box>
  )
}

export default Invoices