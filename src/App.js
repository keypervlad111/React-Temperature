import { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Temperature from './Temperature';

function App() {
  const [color, setColor] = useState(false);

  const handelClick = () => {
    setColor(current => !current);
  }

  return (
    <div className="navbar" style= {{ 
      backgroundColor: color ? 'black' : ''
    }}>
      <Navbar />
      <Temperature /> 
      <button onClick={handelClick}>Switch color</button>
    </div>
  );
}

export default App;
