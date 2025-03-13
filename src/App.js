import { Route, Routes } from 'react-router-dom';
import './App.css';

//components
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

//pages
import Home from './Pages/Home';
import About from './Pages/About';
import Menu from './Pages/Menu';
import Reservations from './Pages/Reservations';
import Gallary from './Pages/Gallary';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/gallary" element={<Gallary />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
