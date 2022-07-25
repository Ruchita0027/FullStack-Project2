import './App.css';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import Navbar from './components/Navbar';
import Backdrop from './components/SideDrawer';
import SideDrawer from './components/SideDrawer';

function App() { 

  const [sideToggle, setSideToggle] = useState(false); 

  return (
    <BrowserRouter>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <main>
        <Routes>
          <Route exact path='/' element={<HomeScreen />} />
          <Route exact path='/product/:id' element={<ProductScreen />} />
          <Route exact path='/cart' element={<CartScreen />} />
        </Routes>
      </main>  
    </BrowserRouter>
  );
}

export default App;
