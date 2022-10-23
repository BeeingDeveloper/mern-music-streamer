import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    <div className="w-screen h-screen bg-primary flex justify-center items-center font-kanit">
      <Routes>
        <Route path='/*' element={<Home /> } />
        <Route path='/login' element={<Login /> } />
      </Routes>
    </div>
  );
}

export default App;
