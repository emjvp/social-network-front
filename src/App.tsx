import React from 'react';
import logo from './logo.svg';
import SignIn from './pages/SignIn';
import './App.css';
import { 
  BrowserRouter,
  Routes, 
  Route 
} from "react-router-dom";
import Header from './components/Header';
import SignUp from './pages/SignUp';
import MainWall from './pages/MainWall';


function App() {
  return (
    <>
      <Header title='test' sections = {[{title: 'test', url: '/test'}, {title: 'test2', url: '/test4'}]} />
      <BrowserRouter>
        <Routes>
          {/* TODO: auth */}
          <Route path="/sign-in" Component={SignIn} />
          <Route path="/sign-up" Component={SignUp} />
          <Route path="/main-wall" Component={MainWall} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
