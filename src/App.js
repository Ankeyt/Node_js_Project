import Login from './pages/Login'
import Register from './pages/Register'
import './App.css';
import Files from './pages/Files';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
  
} from "react-router-dom";


const App = () => {
  return (
    
  <Router>
    <Routes>
      <Route path="/"  element={<Login/>} /> 
      
      <Route path="/register"element={ <Register/>} />
      <Route path="/files"element={ <Files/>} />
      
    </Routes>
  </Router>
  )
}

export default App
