import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Tic from './components/Tic';

function Button2({ children }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/tic');  // Navighează la pagina Tic-Tac-Toe
  };

  return (
    <button onClick={handleClick} className="App-link">
      {children}
    </button>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1>Hello world!</h1>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button message="yeeahhh">Appuie pas pitié</Button>
              </a>
              <Button2>Tic Tac Toe</Button2>
            </header>
          </div>
        } />
        <Route path="/tic" element={<Tic />} />
      </Routes>
    </Router>
  );
}

export default App;

