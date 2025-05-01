import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContractEditor from './components/ContractEditor';
import ContractList from './components/ContractList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ContractList />} />
        <Route path="/editor" element={<ContractEditor />} />
      </Routes>
    </Router>
  );
}

export default App;
