import React, { useState } from 'react';
import logo from './logo.svg';
import SignIn from './pages/SignIn';
import './App.css';
import { 
  BrowserRouter,
  Routes, 
  redirect,
  Route 
} from "react-router-dom";
import Header from './components/Header';
import SignUp from './pages/SignUp';
import MainWall from './pages/MainWall';


function App() {

  // const [loginInfo, setLoginInfo] = useState("");
  const loginInfoS = localStorage.getItem('loginInfo') || "";
  // setLoginInfo(() => loginInfoS);


  return (
    <>
      {/* {
        loginInfoS && 
          <Header title='test' sections = {[{title: 'test', url: '/test'}, {title: 'test2', url: '/test4'}]} />
      } */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn/>} />
          <Route  path="/sign-up" element={<SignUp/>} />
          {/* {
            loginInfoS && */}
            <Route path="/main-wall" element={<MainWall/>} />
          {/* } */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
