import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Defaultpage from './components/Defaultpage';
import { useState } from 'react';
import Fooditems from './components/Fooditems';
import AuthProvider from './components/AuthContext';
import Donateitems from './components/Donateitems';
import Ordersmy from './components/Ordersmy';
import Donationsmy from './components/Donationsmy';


function App() {
  const [isLoginVisible,setLoginVisible]=useState(false)
  const [showErrormessage,setShowErrormessage]=useState(false)
  const handleLoginClick=()=>setLoginVisible(true)
  function closeLogin(){
    setLoginVisible(false)
    setShowErrormessage(false)
  }

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
        <Navbar onLoginClick={handleLoginClick}/>
        <div className='main-content'>
         <Routes>
            <Route path='/' element={<Defaultpage isLoginVisible={isLoginVisible} closeLogin={closeLogin}
                 showErrormessage={showErrormessage} setShowErrormessage={setShowErrormessage}/>}/>
            <Route path='/fooditems' element={<Fooditems/>}/>
            <Route path='/donateitems' element={<Donateitems/>}/>
            <Route path='myorders' element={<Ordersmy/>}/>
            <Route path='mydonations' element={<Donationsmy/>}/>
          </Routes>
        </div>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
