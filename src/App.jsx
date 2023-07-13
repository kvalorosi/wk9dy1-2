import { useState } from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navb from './components/Navb';
import Other from './views/Other';
import Home from './views/Home';

function App() {
  const [count, setCount] = useState(0)
  const styles = {
    container:{
      backgroundImage: "https://images.freeimages.com/images/previews/f98/black-coffee-1185883.jpg",
      width: "100%"
      
    }
  };

  return (
    <>
      <Navb />
      <Routes>
        <Route children path='/' element={<Home />} />
        <Route children path='/other' element={<Other />} />
      </Routes>


    </>
  )
};

export default App
