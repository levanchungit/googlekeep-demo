import * as React from 'react';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';

export default function CustomizedInputBase() {
  return (
    <Box
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 700, height: 48, backgroundColor: '#F5F5F5', borderRadius: 2 }}
    >
      <IconButton sx={{ p: '8px', m: '3px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search' }}
      />
    </Box>
  );
}