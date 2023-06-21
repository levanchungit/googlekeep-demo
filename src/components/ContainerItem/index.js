import React from 'react'
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const index = ({ check, notes, setNotes }) => {
  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr', gridRowGap: 20, width: '80%', p: 4 }}>
      {notes.map((item, index) => {
        if (item.status === check) {
          return <Box key={index} sx={{ mx: 1, backgroundColor: '#AECBFA', borderRadius: 2, p: 2, borderWidth: 1, borderColor: 'GrayText', position: 'relative' }}>
            <Typography sx={{ textAlign: 'left', fontSize: 15, fontWeight: '500', mb: 1 }}>{item.title}</Typography>
            <Typography sx={{ textAlign: 'left', fontSize: 15, fontWeight: '400' }}>{item.body}</Typography>
            <IconButton sx={{ position: 'absolute', top: -15, left: -13 }} onClick={() => {
              //find item by item.id and change status to "deletes"
              const updatedItem = { ...item, status: 'deletes' };
              const updatedNotes = [...notes];
              updatedNotes[index] = updatedItem;
              setNotes(updatedNotes);
            }}>
              <CheckCircleIcon />
            </IconButton>
            <IconButton sx={{ position: 'absolute', top: 4, right: 0 }} onClick={() => {
              const updatedItem = { ...item, status: 'archives' };
              const updatedNotes = [...notes];
              updatedNotes[index] = updatedItem;
              setNotes(updatedNotes);
            }}>
              <PushPinOutlinedIcon />
            </IconButton>

            <IconButton sx={{ position: 'absolute', top: 4, right: 30 }} onClick={() => {
              const updatedItem = { ...item, status: 'note' };
              const updatedNotes = [...notes];
              updatedNotes[index] = updatedItem;
              setNotes(updatedNotes);
            }}>
              <PushPinOutlinedIcon />
            </IconButton>
          </Box>
        }
      })}
    </Box >
  )
}

export default index;
