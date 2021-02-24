import logo from './logo.svg';
import './App.css';
//Get homepage component to main component
import HomePage from './pages/homepage/homepage.component';
import {Route} from 'react-router-dom';


const HatsPage = () => (
  <div>
    <h1>this is hats page</h1>
  </div>
)
//localhost:3000
//RENDERING
function App() {
  return (
    <div>
      <Route path="/" component={HomePage}/>
      <Route path="/hats" component={HatsPage}/>
    </div>
  );
}

export default App;
