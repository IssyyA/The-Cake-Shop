import React from 'react';
import './App.css';
import { Log } from './components/Navbar/logo'
import { Navbar } from './components/Navbar/navbar';
import { Showcase } from './components/Showcase/showcase';
import { Special } from './components/Specials-Menu/specials';
import { Sidebar } from './components/Sidebar/sidebar';
import { Contact } from './components/Contact-us/contact';
import { Footer } from './components/Footer/footer';


function App() {
  return (
    <div className="App">
      <Log/>
      <Navbar/>
      <Showcase/>
      <Sidebar/>
      <Special/>
      <Contact/>
      <Footer/>
      
    </div>
  );
}

export default App;
