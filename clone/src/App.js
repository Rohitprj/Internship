import './App.css';
import About from './pages/About.js';
import CreatorProg from './pages/CreatorProg.js';
import Header from './pages/Header.js';
import SignIn from './pages/SignIn.js';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <header>
      <div style={{ display: "flex", alignitems: "center" }}>
        <div>
          <ul>
            <li style={{ listStyleType: "none", marginLeft: 40, marginTop: 30 }}>
              <a>Creator Programe</a>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li style={{ listStyleType: "none", marginLeft: 10, marginTop: 30 }}>
              <a>Start exploring</a>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li style={{ listStyleType: "none", marginLeft: 200, marginTop: 20 }}>
              <h1>mindtrip</h1>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li style={{ listStyleType: "none", marginLeft: 370, marginTop: 35 }}>
              <a>SignIn</a>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li style={{ listStyleType: "none", marginTop: 30 }}>
              <button type="button" class="btn btn-outline-dark">Get started</button>
            </li>
          </ul>
        </div>

      </div>
    </header >
  )
}

export default App;
