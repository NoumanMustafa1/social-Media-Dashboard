import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <Router >
       <style>{'body { background-color: #003D82; }'}</style>
      <Sidebar />
      <CssBaseline />
      <Dashboard />
    </Router>
  );
}

export default App;
