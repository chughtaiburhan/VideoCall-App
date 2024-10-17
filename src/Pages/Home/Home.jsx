import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import React from 'react';

const Home = () => {
  const [value, setValue] = useState("");  
  const navigate = useNavigate();

  const handleJoinRoom = useCallback(() => {
    if (value.trim()) {  
      navigate(`/room/${value}`);
    }
  }, [navigate, value]);

  return (
    <div>
      <input 
        value={value} 
        type="text" 
        placeholder="Enter Your Room" 
        onChange={(e) => setValue(e.target.value)} 
      />
      <button onClick={handleJoinRoom}>Join</button>
    </div>
  );
}

export default Home;
