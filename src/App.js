import React from 'react'
import InputCreateNote from './components/InputCreateNote';
import HeaderBar from './components/HeaderBar';
import SwipeDrawer from './components/SwipeDrawer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Notes from './components/notes';
import Archives from './components/archives';
import Deletes from './components/deletes';
import Hello from './components/Demo';
import Box from '@mui/material/Box';

export default function App() {
  return (
    <Box style={{ display: "flex", width: "100%" }}>

      <Router>
        <SwipeDrawer />
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/archives" element={<Archives />} />
          <Route path="/deletes" element={<Deletes />} />
          <Route path="/hello" element={<Hello />} />
        </Routes>
      </Router>
    </Box>
  )
}
