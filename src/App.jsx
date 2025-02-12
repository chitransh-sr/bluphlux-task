import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import ScheduleInterview from './pages/ScheduleInterview.jsx';
import EditInterview from './pages/EditInterview.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/schedule" element={<ScheduleInterview />} />
        <Route path="/edit/:id" element={<EditInterview />} />
      </Routes>
    </Router>
  );
}

export default App;