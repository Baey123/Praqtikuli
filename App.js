import Sia from './Sia.js';
import './App.css';
let produqcia = ['Dresses',' T shirts ','shirts ','Jeans ','Blouses ','Trousers ','Skirts ','Cardigans ']

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <button>მთავარი გვერდი</button>
        <button>შეკვეთის გაფორმება</button>
        <button>კონტაქტი</button>
        <table border="1 ">
          <tr className = 'tr' >
            <th>მამაკაცი</th>
            <th>ქალი</th>
            <th>ძაღლი</th>
          </tr>
          
          
          <tr >
            <Sia elements = {produqcia[0]}/>
            <Sia elements = {produqcia[1]}/>
            <Sia elements = {produqcia[2]}/>
            
          </tr>
          
          <tr >
            <Sia elements = {produqcia[3]}/>
            <Sia elements = {produqcia[4]}/>
            <Sia elements = {produqcia[5]}/>
            
          </tr>
          <tr >
            <Sia elements = {produqcia[6]}/>
            <Sia elements = {produqcia[7]}/>
            <Sia elements = {produqcia[7]}/>
            
            
          </tr>
        </table>
      
      </header>
      
    </div>
    
  );
}

export default App;
