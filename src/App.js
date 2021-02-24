import logo from './logo.svg';
import './App.css';
//Get homepage component to main component
import HomePage from './pages/homepage/homepage.component';


//RENDERING
function App() {
  return (
    <div>
      <HomePage />    {/* render homepage component here*/}
      <h1>Testing the oswald font</h1>
    </div>
  );
}

export default App;
