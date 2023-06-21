import React, { useContext, useState } from 'react';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import { DataContext } from '../../provider/dataProvider';
const CustomizedInputBase = () => {
  const [search, setSearch] = useState('');
  const { notes, setNotes } = useContext(DataContext);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    const newNotes = notes.filter((note) => {
      return note.title.toLowerCase().includes(search.toLowerCase());
    });
    setNotes(newNotes);
  };

  return (
    <Box
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%', backgroundColor: '#F5F5F5', borderRadius: 2, mr: 20 }}
    >
      <Box sx={{ maxWidth: 740 }}>
        <IconButton sx={{ p: '8px', m: '3px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search"
          inputProps={{ 'aria-label': 'search' }}
          value={search}
          onChange={(e) => handleSearch(e)}
        />
      </Box>

    </Box>
  );
}

export default CustomizedInputBase;