import React from 'react'
import { AppBar, IconButton, Toolbar, Typography, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ReplayIcon from '@mui/icons-material/Replay';
import ViewAgendaOutlinedIcon from '@mui/icons-material/ViewAgendaOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import styled from '@emotion/styled';
import InputSearch from '../InputSearch';


const Header = styled(AppBar)`
  z-index: 1201;
  background: #fff;
  height: 70px;
  box-shadow: inset 0 -1px 0 0 #dadce0;
`

const Heading = styled(Typography)`
  color: #5F6368;
  font-size: 24px;
  margin-left: 25px;
  margin-right: 100px;
`

const HeaderBar = ({ open, handleDrawer }) => {
    const logo = 'https://seeklogo.com/images/G/google-keep-logo-0BC92EBBBD-seeklogo.com.png';
    return (
        <Header open={open} >
            <Toolbar>
                <IconButton onClick={() => handleDrawer()} sx={{ mr: 1 }}>
                    <MenuIcon />
                </IconButton>
                <img style={{ width: '35px' }} src={logo} alt='logo'></img>
                <Heading>Keep</Heading>
                <InputSearch sx={{ p: 40 }}></InputSearch>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <Box sx={{ display: 'flex', }}>
                        <IconButton sx={{ mr: 1 }}>
                            <ReplayIcon sx={{ transform: 'scaleX(-1) rotate(-45deg)' }} />
                        </IconButton>
                        <IconButton sx={{ mr: 1 }}>
                            <ViewAgendaOutlinedIcon />
                        </IconButton>
                        <IconButton sx={{ mr: 1 }}>
                            <SettingsOutlinedIcon />
                        </IconButton>
                    </Box>
                    <Box sx={{ ml: 4, display: 'flex' }}>
                        <IconButton sx={{ mr: 1 }}>
                            <AppsOutlinedIcon />
                        </IconButton>
                        <Box sx={{ width: 40, height: 40, borderRadius: 20, backgroundColor: '#658864' }}>
                        </Box>
                    </Box>
                </Box>

            </Toolbar >
        </Header >
    )
}

export default HeaderBar;
