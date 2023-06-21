import React, { useContext, useState } from 'react'
import Box from '@mui/material/Box';
import InputCreateNote from '../InputCreateNote';
import ContainerItem from '../ContainerItem';
import { DataContext } from '../../provider/dataProvider';

const Notes = () => {
    const { notes, setNotes } = useContext(DataContext);

    return (
        <Box sx={{ display: "flex", width: "100%", alignItems: 'center', justifyContent: 'center', marginTop: 13, flexDirection: 'column' }}>
            <InputCreateNote check={"note"} notes={notes} setNotes={setNotes}></InputCreateNote>
            <ContainerItem check={"note"} notes={notes} setNotes={setNotes}></ContainerItem>
        </Box>
    )
}

export default Notes


