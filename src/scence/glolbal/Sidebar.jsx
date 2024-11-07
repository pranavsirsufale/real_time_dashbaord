import React , {useState} from 'react'
import { Menu, MenuItem,ProSidebar } from 'react-pro-sidebar'
import 'react-pro-sidebar/dist/css/styles.css';
import {Box,IconButton,Typography,useTheme} from '@mui/material'
import { Link } from 'react-router-dom'
import {tokens } from '../../theme.js'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import  LightModeOutlined from "@mui/icons-material/LightModeOutlined"
import  PeopleOutlinedIcion from "@mui/icons-material/PeopleOutlined"
import  ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined"
import  ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined"
import  PersonOutlinedIcon from "@mui/icons-material/PersonOutlined"
import  CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined"
import  HelpOutlinedIcon from "@mui/icons-material/HelpOutlined"
import  BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined"
import  PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined"
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import  TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined"
import  MenuOutlinedIcon from "@mui/icons-material/MenuOutlined"
import  MapOutlinedIcon from "@mui/icons-material/MapOutlined"



const  Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode)
  const [isCollapsed,setIsCollapsed] = useState(false);
  const [selected,setSelected ] = useState('Dashboard')
  const Item = ({ title,to,icon,selected,setSelected}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)

    return (
      <MenuItem 
      active={ selected === title } 
      style={{color : colors.greay[100] }} 
      onClick={()=>setSelected(title)}
      icon={icon}
      >
      <Typography>
        {title}
      </Typography>
      <Link to={to} />
      </MenuItem>
    )
  }
  return (
    <Box 
    sx={{
        "& .pro-sidebar-inner":{
          background : `${colors.primary[900]} !important`
        },
        "& .pro-icon-wrapper":{
          backgroundColor : " transparent !important"
        },
        "& .pro-inner-item":{
          padding : "5px 35px 5px 20px !important"
        },
        "& .pro-inner-item:hover":{
          color : "#868dfb !important"
        },
        "& .pro-menu-item.active":{
          color : "#6870"
        }
    }}
    >

      <ProSidebar 
      collapsed={isCollapsed}
      >

    <Menu
    iconShape='square'
    >

    <MenuItem
    onClick={()=>setIsCollapsed(!isCollapsed)}
    icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
    style={{
      margin : '10px 0 20px 0',
      color : colors.greay[100]
    }}
    sx={{
      
    }}
    >

      {
        !isCollapsed && (
          <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          ml="15px"
          >
            <Typography variant='h3' color={colors.greay[100]} >
              ADMINIS 

            </Typography>
            <IconButton onClick={()=> setIsCollapsed(!isCollapsed)} >
              <MenuOutlinedIcon/>
            </IconButton>
            </Box>
        )
      }

</MenuItem>

{/* user  */}
{ !isCollapsed && (
  <Box mb='25px'>
<Box display='flex' justifyContent='center' alightItem='center' >
  <img 
  alt='profile-user'
  width='100px'
  height='100px'
  src={`../../assets/user.jpg`}
  style={{cursor:'pointer',borderRadius:'50%'}}
  />
</Box>

  <Box textAlign='center'>

    <Typography variant='h2' color={colors.greay[100]} fontweight='bold' sx={{m:'10px 0 0 0'}} > Pooja ( Pillu ) </Typography>
    <Typography 
    variant='h5'
    color={colors.greenAccent[400]}


    > Dr. Babasaheb Ambedkar Marathwada University</Typography>
  </Box>
  </Box>
)}


 {/* MenuItem  */}
<Box
paddingLeft={isCollapsed ? undefined: '10%'}

>
  <Item 
  title='Dashboard'
  to='/'
  icon={<HomeOutlinedIcon/>}
  selected={selected}
  setSelected={setSelected}
  />


  
  <Item 
  title='Manage Team'
  to='/team'
  icon={<PeopleOutlinedIcion/>}
  selected={selected}
  setSelected={setSelected}
  />


  <Item 
  title='Contact Information'
  to='/contacts'
  icon={<ContactsOutlinedIcon/>}
  selected={selected}
  setSelected={setSelected}
  />


  <Item 
  title='Invoices Balances'
  to='/invoices'
  icon={<ReceiptOutlinedIcon/>}
  selected={selected}
  setSelected={setSelected}
  />


  <Item 
  title='Profile Form'
  to='/form'
  icon={<PersonOutlinedIcon/>}
  selected={selected}
  setSelected={setSelected}
  />


  <Item 
  title='Calendar'
  to='/calendar'
  icon={<CalendarTodayOutlinedIcon/>}
  selected={selected}
  setSelected={setSelected}
  />


  <Item 
  title='FAQ Page'
  to='/faq'
  icon={<HelpOutlinedIcon/>}
  selected={selected}
  setSelected={setSelected}
  />


  <Item 
  title='Bar Chart'
  to='/bar'
  icon={<BarChartOutlinedIcon/>}
  selected={selected}
  setSelected={setSelected}
  />



  <Item 
  title='Pie Chart'
  to='/pie'
  icon={<PieChartOutlineOutlinedIcon/>}
  selected={selected}
  setSelected={setSelected}
  />



  <Item 
  title='Line Chart'
  to='/line'
  icon={<TimelineOutlinedIcon/>}
  selected={selected}
  setSelected={setSelected}
  />



  <Item 
  title='Geography'
  to='/geography'
  icon={<PublicOutlinedIcon/>}
  selected={selected}
  setSelected={setSelected}
  />










</Box>

      

</Menu>
</ProSidebar>
    </Box>
  )
}

export default Sidebar