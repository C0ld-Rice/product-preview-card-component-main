import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Product from "../../images/image-product-desktop.jpg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="Card-Wrapper">
        <div className="Product-Image-Wrapper">
          <img className="Product-Image" alt="product" src={Product} />
        </div>
        <div className="Information">
          <h2 className="Cateogry-Header">Perfume</h2>
          <h1 className="Info-Header">Gabrielle Essence Eau Parfum</h1>
          <p className="Info-desc">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="Pricing-Wrapper">
            <p className="Pricing">$149.99</p>
            <p className="Sub-Pricing">$149.99</p>
          </div>
          <button className="Purchase-Button">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default App;
