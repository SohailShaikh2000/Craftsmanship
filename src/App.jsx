import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Products from "./components/Products";
import SelectedProduct from "./components/SelectedProduct";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="container">
        <HomePage />
      </div>
      <div className="container">
        <Products />
      </div>
      <div className="container">
        <SelectedProduct />
      </div>
      <div className="container">
        <About />
      </div>
      <div className="container">
        <Footer />
      </div>
    </div>
  );
}

export default App;
