import React, { useContext, useState } from 'react'
import Box from '@mui/material/Box';
import InputCreateNote from '../InputCreateNote';
import ContainerItem from '../ContainerItem';
import { DataContext } from '../../provider/dataProvider';

const Deletes = () => {
    const { notes, setNotes } = useContext(DataContext);

    return (
        <Box sx={{ display: "flex", width: "100%", alignItems: 'center', justifyContent: 'center', marginTop: 13, flexDirection: 'column' }}>
            <InputCreateNote check={"deletes"} notes={notes} setNotes={setNotes}></InputCreateNote>
            <ContainerItem check={"deletes"} notes={notes} setNotes={setNotes}></ContainerItem>
        </Box>
    )
}

export default Deletes


