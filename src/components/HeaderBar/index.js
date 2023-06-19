import React from 'react'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import styled from '@emotion/styled';

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
`

const HeaderBar = ({ open, handleDrawer }) => {
    const logo = 'https://seeklogo.com/images/G/google-keep-logo-0BC92EBBBD-seeklogo.com.png';
    return (
        <Header open={open} >
            <Toolbar>
                <IconButton onClick={() => handleDrawer()} sx={{ mr: 1 }}>
                    <MenuIcon />
                </IconButton>
                <img style={{ width: '35px' }} src={logo}></img>
                <Heading>Keep</Heading>
            </Toolbar >
        </Header >
    )
}

export default HeaderBar;
