
import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Signup from './screens/Signup';
import { CartProvider } from './components/ContextReducer';
import MyOrder from './screens/MyOrder';
import Checkout from './screens/Checkout';
import { PriceProvider } from './components/PriceContext';


function App() {
  return (
    <CartProvider>
      <PriceProvider>
        <Router>
          <div>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<Signup />} />
              <Route exact path="/myorder" element={<MyOrder />} />
              <Route exact path="/checkout" element={<Checkout />} />
            </Routes>
          </div>
        </Router>
      </PriceProvider>
    </CartProvider>

  );
}

export default App;
