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
      sx={{ p: '2px 6px', display: 'flex', alignItems: 'center', width: 600, height: '46px', boxShadow: '0px 1px 5px gray' }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Tạo ghi chú..."
        inputProps={{ 'aria-label': 'tao ghi chu' }}
      />
      <IconButton type="button" sx={{ ml: 2 }} aria-label="checkbox">
        <CheckBoxOutlinedIcon />
      </IconButton>
      <IconButton type="button" sx={{ ml: 2 }} aria-label="brush">
        <BrushOutlinedIcon />
      </IconButton>
      <IconButton type="button" sx={{ ml: 2 }} aria-label="image">
        <ImageOutlinedIcon />
      </IconButton>
    </Paper>
  );
}