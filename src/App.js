import './App.css';
import SignIn from './components/SignIn';
import Navbar from './components/Navbar';
import Login from './components/Login';
import { Routes, Route } from "react-router-dom";
import Lessons from './components/Lessons';
import Teachers from './components/Teachers';
import Home from './pages/Home';
import Contact from './components/Contact';




function App() {



  return (

    <div className='flex flex-col h-screen items-center justify-center'>
      {/* <Navbar className='nav' /> */}

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/sign" element={<SignIn />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" />
      </Routes>








    </div>


  );
}

export default App;
