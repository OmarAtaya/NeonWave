import './App.css';
import Header from './Components/Header/Header';
import Free from './Components/Free/Free';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Free />
        <Header />
        <Routes>
          <Route exact path="/" element={<Home/>}/> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
