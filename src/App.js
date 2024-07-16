import React, { useState } from 'react';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className='App'>
      {isLoggedIn ? <Home /> : <Login onLogin={handleLogin} />}
    </div>
  );
}

export default App;
