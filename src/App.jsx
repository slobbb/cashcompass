import React from 'react';
import './App.css';
import Layout from './components/Layout';
// import Hero from './components/Hero';
// import Presentation from './components/Presentation';
// import Pictures from './components/PicturesSlider';
// import AuthMain from './pages/AuthMain'; 
import { Routes, Route } from 'react-router-dom';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashBoard from './components/DashBoard';

function App() {

  
  return (
    <div className="App">
      <ToastContainer
      position='top-center'
      autoClose={3500}
      closeOnClick
      pauseOnHover
      draggable
      theme='dark'
      transition={Zoom}
      limit={1}
      />
      <Layout  >
        <Routes>
          <Route path="/" element={<> <DashBoard/></>} />
          {/* <Route path="/AuthMain" element={<AuthMain />} /> */}
        </Routes>
      </Layout>
    </div>
  );
}

export default App;