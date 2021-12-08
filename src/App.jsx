import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';




function App() {

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <br/>
        <ItemListContainer /* greeting='Hola soy ItemListContainer' */>
        </ItemListContainer>
        <ItemDetailContainer/>
      </header>

    </div>
  );
}

export default App;
