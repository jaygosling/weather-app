import './App.css';
import { Navbar } from './js/component/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './js/pages/Home'
import ShowCity from './js/component/ShowCity';
import injectContext from './js/store/appContext';

function App() {
  return (
    <BrowserRouter>

    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/city/:id" element={<ShowCity/>} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default injectContext(App);
