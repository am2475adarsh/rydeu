import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
// import Navbar from './Components/Navbar'
import Faq from './Components/Faq'
import NayaPage from './Components/NayaPage';
import Navbar from './Components/Navbar'; 

function App() {
  return (
    <div className="App">
    {/* <Faq></Faq> */}
    {/* <a href={NayaPage} style={Notun}>Click Kardo Bhai Plonks</a> */}

      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
        <Route path='/' element={<Navbar />} />
          <Route path='/Faq' element={<Faq />} />
          <Route path='/NayaPage' element={<NayaPage />} />
        </Routes>
        </BrowserRouter>
        {/* <Chalja></Chalja> */}
    {/* <NayaPage></NayaPage> */}

    </div>
  );
}

export default App;
