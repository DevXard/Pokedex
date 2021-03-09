import Pokedex from './Pokedex'
import cards from './cards'
import './App.css';


function App() {
  return (
    <div className="App">
     <Pokedex cards={cards} />
    </div>
  );
}

export default App;
