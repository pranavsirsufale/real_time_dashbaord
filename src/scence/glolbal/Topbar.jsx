import React from 'react'
import { Box,IconButton,useTheme}  from '@mui/material'
import { ColorModeContext, tokens } from '../../theme'
import InputBase  from '@mui/material/InputBase'
import  LightModeOutlined from "@mui/icons-material/LightModeOutlined"
import  DarkModeOutlined from "@mui/icons-material/DarkModeOutlined"
import  NotificationsOutlined from "@mui/icons-material/NotificationsOutlined"
import  SettingsOutlined from "@mui/icons-material/SettingsOutlined"
import  PersonOutlined from "@mui/icons-material/PersonOutlined"
import SearchIcon from '@mui/icons-material/Search';
import { useContext } from 'react'
import  SearchOutlined from "@mui/icons-material/SearchOutlined"






function Topbar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode)
  const colorMode = useContext(ColorModeContext)


  
  


  return (
    <Box display='flex' justifyContent='space-between'  p={2} >

      {/* SEARH BAR  */}
      <Box display='flex' backgroundColor={colors.primary[500]} 
      borderRadius='3px'
      >



      <InputBase sx={{ ml:2,flex:1}} placeholder='Search'  />
      <IconButton type='button' sx={{p:1}}  >

      <SearchIcon />

      </IconButton>


      </Box>

      {/*  icons  */}
      <Box cursor='pointer'>
      <IconButton onClick={colorMode.toggleColorMode} 
        
        >
          {
            theme.palette.mode === 'dark' ?
            (
              <LightModeOutlined/>
            )
            :
            (
              <DarkModeOutlined />
            )
          }
      </IconButton>

      <IconButton>
        <NotificationsOutlined/>
      </IconButton>
      
      <IconButton>
          <SettingsOutlined/>
      </IconButton>
      
      <IconButton>
        <PersonOutlined/>
      </IconButton>
      

      </Box>
    </Box>
  )
}

export default Topbar