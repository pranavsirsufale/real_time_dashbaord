import { Typography, useTheme,   Box } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { tokens } from '../../theme'
import { mockDataTeam } from '../../data/MockData'   
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined'
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined'
import LockOpeneOutlinedIcon from '@mui/icons-material/LockOpenOutlined'
import Header from '../../components/Header'
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import { useState } from 'react'



const Team = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode);

    const columns = [
        {
            field : "id",
            headerName : "ID"
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
            field : "access",
            headerName : "ACCESS LEVEL",
            flex : 1,
            renderCell : ({ row : { access }}) => {
                return (
                    <Box 
                    width='60%'
                    m='0 auto'
                    p='5px'
                    display='flex'
                    justifyContent='center'
                    backgroundColor={
                        access === 'admin' ? 
                        colors.greenAccent[600] :
                        colors.greenAccent[700]
                    }
                    borderRadius='4px'
                    > 
                    {
                        access === 'admin'
                        && 
                        <AdminPanelSettingsOutlinedIcon/>
                    }
                    {
                        access === 'manager'
                        && 
                        <SecurityOutlinedIcon/>
                    }
                    {
                        access === 'user'
                        && 
                        <LockOpeneOutlinedIcon/>
                    }
                    <Typography color={colors.greay[100]} sx={{ ml:'5px'}} >
                            { access }
                    </Typography>

                    </Box>
                )
            }
        }
    ]

    const [paginationModel, setPaginationModel] = useState({
        pageSize: 10,  
        page: 0,
      });


  return (
    <Box m='20px' 
    width='75vw'
    >
         <Header
      title='TEAM'
      subtitle='Managing the Team Members'
      
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
            }
        }}

        >
            <DataGrid 
            rows={mockDataTeam}
            columns={columns}
            pagination
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
            pageSizeOptions={[10,20,30]}
            
            />
        </Box>
    </Box>
  )
}

export default Team