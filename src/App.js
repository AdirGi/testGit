import React from 'react';
import './App.css';
import FlightsPage from './pages/FlightsPage';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
// import Nav1 from "./components/Nav";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import BuyTickets from "./pages/BuyTickets";
import NavMui from './components/NavMui';
import Nav1 from './components/Nav';


function App() {
  return (
    <div><Nav1></Nav1>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/flights' element={<FlightsPage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/buy' element={<BuyTickets />} />
          </Routes>
          <Footer />
        </header>
      </div>
    </div>
  );
}

export default App;
