import React from 'react';
import { Route, Routes } from 'react-router-dom'; // No need for BrowserRouter here
import Home from './Pages/Home/Home';
import Room from './Pages/Room/Room';

const App = () => {
  return (
    <Routes>
      {/* Define the Home component route */}
      <Route path="/" element={<Home />} />
      {/* Define the Room component route with roomId as a parameter */}
      <Route path="/room/:roomId" element={<Room />} />
    </Routes>
  );
};

export default App;
