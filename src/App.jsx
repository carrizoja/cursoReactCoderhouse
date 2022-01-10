import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Cart from './components/Cart/Cart';
import CartContextProvider from './components/CartContext/CartContext';
import React, { useState } from "react";
import Footer from '../src/components/Footer/Footer.jsx'
import Form from './pages/Form/Form.jsx'
import CarouselEcommerce from './components/Carousel/CarouselEcommerce';


function App() {
  
  const [cartList, setCartList] = useState([]);

  return (
    <CartContextProvider value={{cartList, setCartList}}>
       <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <NavBar />
          <CarouselEcommerce></CarouselEcommerce>
          <br />
          <Routes>
            <Route
              exact path="/" element={<ItemListContainer>
              </ItemListContainer>}       
            />
            <Route
              exact path="/categoria/:idCate"
               element={<ItemListContainer>
              </ItemListContainer>}
            />
            <Route
              exact path="/detalle/:id" element={<ItemDetailContainer />}
            />
            <Route
              exact path="/cart" element={<Cart />}
            />
            <Route exact path="/form"
              element={<Form />}
            />
          </Routes>       
        </header>
        
      </div>
      <Footer/>
    </BrowserRouter>
    </CartContextProvider>
  
  );
}

export default App;
