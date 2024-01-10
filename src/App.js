import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Customer/Navigation/Navigation';
import { HomePage } from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Navigation />
       <HomePage />
    </div>
  );
}

export default App;
