import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Customer/Navigation/Navigation';
import { HomePage } from './Pages/Home/Home';
import { Footer } from './Components/Customer/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
