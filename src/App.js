import './App.css';
import { Route,Routes, useParams } from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import Description from './Description/Description';
import CoinList from './Pages/CoinList/CoinList'
import "bootstrap/dist/css/bootstrap.min.css";
import BullionCoins from './Pages/CoinList/BullionCoins';
import ExclusiveCoins from './Pages/CoinList/ExclusiveCoins';
import CommemorativeCoins from './Pages/CoinList/CommemorativeCoins';
import { useState } from 'react';
import DataMain from './dataMain.json';

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/coinlist/:category' element={<CoinList />}></Route>
        <Route path='/description/:id' element={<Description data={DataMain}/>} ></Route>
      </Routes>
    </div>
  );
}

export default App;