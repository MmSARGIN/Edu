import './App.css';
import SignIn from './components/SignIn';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from './components/Navbar';
import Login from './components/Login';
import { Routes, Route, Link } from "react-router-dom";
import Lessons from './components/Lessons';
import Teachers from './components/Teachers';
import Home from './pages/Home';




function App() {
  const text = useSelector((state) => state.text.login);
  const dispatch = useDispatch();
  
  
  return (
    
    <div className='flex flex-col items-center  '>
      <Navbar className='nav' />
      
       <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home/>} />
        <Route path="/teachers" element={<Teachers/>} />
        <Route path="/lessons" element={ <Lessons /> } />
        <Route path="/sign" element={ <SignIn /> } />
        <Route path="/contact" />
        <Route path="/profile" />
      </Routes>
      
      
     
    
      
       
        
      
    </div>

  
  );
}

export default App;
