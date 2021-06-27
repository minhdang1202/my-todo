import React from 'react';
import './App.css'
import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner'
import Search from './components/search/Search'
import Explore from './components/explore/Explore'
import Adventure from './components/adventures/Adventures'
import Gallery from './components/gallery/Gallery'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Booking from './components/booking/Booking'
function App() {
  return (
   
    <Router>
        <Navbar/>
        <Banner/>
        <Search/>
        <Explore/>
        <Adventure/>
        <Booking/>
        <Gallery/>
        <Contact/>
        <Footer/>
    </Router>

  );
}

export default App;
