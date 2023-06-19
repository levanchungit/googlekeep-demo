import React from 'react'
import Box from '@mui/material/Box';
import InputCreateNote from '../InputCreateNote';
import { Typography } from '@mui/material';

export default function index() {
    return (
        <Box sx={{ display: "flex", width: "100%", alignItems: 'center', justifyContent: 'center', marginTop: 20, flexDirection: 'column' }}>
            <InputCreateNote></InputCreateNote>

            <Box sx={{ display: 'flex', width: '80%', backgroundColor: 'yellow', flexDirection: 'row' }}>
                <Box sx={{ flex: 1, backgroundColor: 'red' }}><Typography sx={{ textAlign: 'center' }}>Box 1</Typography></Box>
                <Box sx={{ flex: 1, backgroundColor: 'pink' }}><Typography sx={{ textAlign: 'center' }}>Box 1</Typography></Box>
                <Box sx={{ flex: 1, backgroundColor: 'brown' }}><Typography sx={{ textAlign: 'center' }}>Box 1</Typography></Box>
                <Box sx={{ flex: 1 }}><Typography sx={{ textAlign: 'center' }}>Box 1</Typography></Box>
                <Box sx={{ flex: 1 }}><Typography sx={{ textAlign: 'center' }}>Box 1</Typography></Box>
            </Box>
        </Box>
    )
}
