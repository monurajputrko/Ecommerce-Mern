import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Customer/Navigation/Navigation';
import { HomePage } from './Pages/Home/Home';
import { Footer } from './Components/Customer/Footer/Footer';
import Product from './Pages/Products/Product';
import { AllRoutes } from './All Routes/AllRoutes';


function App() {
  return (
    <div className="App">
      <Navigation />
     <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
