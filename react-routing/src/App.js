import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Gallery from './Components/Gallery/Gallery'
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contact' element={<Contact />} />
        {/* <Home /> */}
        {/* <Contact /> */}
        {/* <Gallery /> */}
        {/* <About /> */}
      </Routes>
    </div>
  );
}

export default App;
