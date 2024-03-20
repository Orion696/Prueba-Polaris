import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {AppProvider} from '@shopify/polaris';
import Layout from './components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
