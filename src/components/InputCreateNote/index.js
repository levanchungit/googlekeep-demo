import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';

// import {CheckBoxOutlinedIcon, BrushOutlinedIcon, ImageOutlinedIcon
export default function InputCreateNote() {
  return (
    <Paper
      component="form"
      sx={{ p: '4px 16px', display: 'flex', alignItems: 'center', width: 750, boxShadow: '0px 4px 4px gray' }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1, backgroundColor: 'yellow' }}
        placeholder="Tạo ghi chú..."
        inputProps={{ 'aria-label': 'tao ghi chu' }}
      />
      <IconButton type="button" sx={{ p: '0px 18px' }} aria-label="checkbox">
        <CheckBoxOutlinedIcon />
      </IconButton>
      <IconButton type="button" sx={{ p: '0px 18px' }} aria-label="brush">
        <BrushOutlinedIcon />
      </IconButton>
      <IconButton type="button" sx={{ p: '0px 18px' }} aria-label="image">
        <ImageOutlinedIcon />
      </IconButton>
    </Paper>
  );
}