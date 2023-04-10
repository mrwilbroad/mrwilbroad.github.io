import './App.css';
import React from 'react';
import { Routes, Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import AppNavigation from './components/Navigation/AppNavigation';
import WelcomeNote from './components/WelcomeNote';
import DepertmentPage from './components/DepertmentPage';
import AboutUsSection from './components/AboutUsPage';
import FooterSection from './components/FooterSection';

const App =()=> {

    
  


  return (
    <React.Fragment>
      <AppNavigation/>
      <Routes>
         <Route path='/' element={<HomePage/>}/>
         <Route path='mrwilbroad.github.io' element={<HomePage/>}/>
         <Route path='/welcome-note' element={<WelcomeNote/>}/>
         <Route path='/department-list' element={<DepertmentPage/>} />
         <Route path='/About-us' element={<AboutUsSection/>} />
    </Routes>
    <FooterSection/>
    </React.Fragment>
  );
      
}

export default App;
