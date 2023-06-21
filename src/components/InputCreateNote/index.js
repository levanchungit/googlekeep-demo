import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';

// import {CheckBoxOutlinedIcon, BrushOutlinedIcon, ImageOutlinedIcon
const InputCreateNote = ({ notes, setNotes }) => {
  const [item, setItem] = useState({
    id: 0,
    title: '',
    body: '',
    backgroundColor: '',
    status: '',
  });

  return (
    <Paper
      sx={{ p: '2px 6px', display: 'flex', alignItems: 'center', width: 600, height: '46px', boxShadow: '0px 1px 5px gray' }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Tạo ghi chú..."
        inputProps={{ 'aria-label': 'tao ghi chu' }}
        value={item.title}
        onChange={(e) => setItem({ ...item, title: e.target.value, backgroundColor: 'gray', status: 'note' })}
        onKeyPress={(e) => {
          if (e.charCode === 13) {
            //add item to list
            //set item.id + 1 
            item.id = item.id + 1
            setNotes([...notes, item])
            setItem({ ...item, title: '', body: '' })
            console.log(notes);
          }
        }}
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

export default InputCreateNote