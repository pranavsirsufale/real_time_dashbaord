import React , { useState} from 'react'
import { Box, Toolbar, useTheme } from '@mui/material'
import Header from '../../components/Header'
import { mockDataContacts } from '../../data/MockDataContacts'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { tokens } from '../../theme'






function Contacts() {
    const themes = useTheme()
    console.log("themes from contact js ::: " , themes);
    
    const colors = tokens(themes.palette.mode)
    console.log("colors from contact js :::: ",colors);
    



    const columns = [
        {
            field : "id",
            headerName : "ID",
            flex : 0.5,
        },
        {
            field : "registerId",
            headerName : 'Resiter ID',
        },
        {
            field : "name",
            headerName : "NAME",
            flex : 1 ,
            cellClassName : "name-column--cell",
        },
        {
            field : "email",
            headerName : "EMAIL",
            flex : 1,
        },
        {
            field : "age",
            headerName : "AGE",
            type : "number",
            headerAlign : "left",
            align : "left",

        },
        {
            field : "phone",
            headerName : "Phone Number",
            flex : 1,
        },
        {
            field : "address",
            headerName : "Address",
            flex : 1,
        },
        {
            field : "city",
            headerName : "City",
            flex : 1,
        },
        {
            field : "zipCode",
            headerName : "Zip Code",
            flex : 1
        },
        

       
    ]

    const [paginationModel, setPaginationModel] = useState({
        pageSize: 10,  
        page: 0,
      });

  
    
  return (
    <Box

    
    m='20px'
    >
             <Header
      title='Contact'
      subtitle='List of Contacts for future References'
      
      />

<Box
        m='40px'
        height='50vh'
        sx={{
            "& .MuiDataGrid-root": {
                border : "none"
            },
            "& .MuiDataGrid-cell":{
                borderBottom : "none"
            },
            "& .name-column--cell":{
                color : colors.greenAccent[300]
            },
            "& .MuiDataGrid-columnHeader":{
                backgroundColor : colors.blueAccent[700],
                borderBottom : "none"
            },
            "& .MuiDataGrid-columnSeparator--sideRight":{
                backgroundColor : colors.blueAccent[700]
            },
            "& .MuiDataGrid-scrollbarFiller" : {
                backgroundColor : colors.blueAccent[700]
            }
            ,
            "& .MuiDataGrid-virtualScroller" : {
                backgroundColor : colors.primary[400]
            },
            "& .MuiDataGrid-footerContainer":{
                 borderTop : "none",
                 backgroundColor : colors.blueAccent[700]
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text" : {
                color : `${colors.greay[100]} !important`
            }
        }}

        >


      <DataGrid
        

        rows={mockDataContacts}
        columns={columns}
        components={{Toolbar : GridToolbar}}
        pagination
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        pageSizeOptions={[10,20,30]}

/>

</Box>


      



    </Box>
  )
}

export default Contacts