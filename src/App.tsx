import BurgerScene from './components/BurgerScene';
import './App.css';

function App() {
  return (
    <div className="container">
      <BurgerScene />
      
      <div className="ui-overlay">
        <header>
          <div className="logo">BURGER<span>BYTE</span></div>
          <nav>
            <ul>
              <li>Menu</li>
              <li>Locations</li>
              <li>About</li>
            </ul>
          </nav>
        </header>

        <main>
          <h1 className="title">THE ULTIMATE<br /><span>3D BURGER</span></h1>
          <p className="description">
            Experience the flavor in every dimension. Crafted with procedural precision 
             and seasoned with mathematical perfection.
          </p>
          <button className="cta-button">ORDER NOW</button>
        </main>

        <footer>
          <div className="footer-item">
            <span className="label">Price</span>
            <span className="value">$12.99</span>
          </div>
          <div className="footer-item">
            <span className="label">Calories</span>
            <span className="value">850 kcal</span>
          </div>
          <div className="footer-item">
            <span className="label">Weight</span>
            <span className="value">320g</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
