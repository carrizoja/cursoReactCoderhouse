import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/01-useState/ItemCount';


function App() {

  const inicial = 1
  const max = 10

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <ItemListContainer greeting='Hola soy ItemListContainer'>
        </ItemListContainer>
        <ItemCount inicial={inicial} max={max} />
      </header>

    </div>
  );
}

export default App;
