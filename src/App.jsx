import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';




function App() {

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <br/>
        <ItemListContainer /* greeting='Hola soy ItemListContainer' */>
        </ItemListContainer>
        {/* <ItemCount inicial={inicial} max={max} /> */}
      </header>

    </div>
  );
}

export default App;
