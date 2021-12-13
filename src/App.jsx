import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Cart from './components/Cart/Cart';



function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <NavBar />
          <br />
          <Routes>
            <Route
              exact path="/" element={<ItemListContainer /* greeting='Hola soy ItemListContainer' */>
              </ItemListContainer>}
              
            />
            <Route
              exact path="/categoria/:idCate"
               element={<ItemListContainer /* greeting='Hola soy ItemListContainer' */>
              </ItemListContainer>}
            />
            <Route
              exact path="/detalle/:id" element={<ItemDetailContainer />}
            />
            <Route
              exact path="/cart" element={<Cart />}
            />
          </Routes>
        </header>
      </div>
    </BrowserRouter>

  );
}

export default App;
