import './App.css';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import { BrowserRouter as Router, Route, Routes, Routr, Switch } from 'react-router-dom';
import Create from './Create';

function App() {
  
  return (
    <Router>
    <div className="App">
      <Navbar/>
      
      <div className='context'>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/Create" element={<Create/>}/>

          </Routes>

        

      </div>



    </div>
    </Router>
  );
}

export default App;
