import React from 'react'
import Box from '@mui/material/Box';
import InputCreateNote from '../InputCreateNote';
import ContainerItem from '../ContainerItem';

export default function index() {
    return (
        <Box sx={{ display: "flex", width: "100%", alignItems: 'center', justifyContent: 'center', marginTop: 13, flexDirection: 'column' }}>
            <InputCreateNote></InputCreateNote>
            <ContainerItem></ContainerItem>
        </Box>
    )
}
