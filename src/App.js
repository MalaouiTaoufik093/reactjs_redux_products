import './App.css';
import Add_Product from './components/Add_Product';
import List_Products from './components/List_Products';
import MyMenu from './components/menu';

function App() {
  return (
    <div className="App">
      <MyMenu />
      <div class="container">
        <div class="row">
          <div class="col">
            <Add_Product />
          </div>
          <div class="col"><h2>List des produits</h2>
          <List_Products />
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
