import './App.css';
import Registration from './component/Registration';
import Login from './component/Login';
import Main from './component/Main';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      
    </div>
    <Routes>
      <Route path='/' element={<Registration />} />
      <Route path='/login' element={<Login />} />
      <Route path='/main' element={<Main />} />
    </Routes>
    </Router>
  );
}

export default App;
