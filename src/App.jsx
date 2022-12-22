import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import CoinDescription from './Components/CoinDescription/CoinDescription';
import CoinList from './Pages/CoinList/CoinList';
import "bootstrap/dist/css/bootstrap.min.css";
import DataMain from './Data/dataMain.json';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/coinlist' element={<CoinList />}></Route>
        <Route path='/coinlists/:category' element={<CoinList />}></Route>
        <Route path='/description/:id' element={<CoinDescription data={DataMain} />}></Route>
      </Routes>
    </div>
  );
}

export default App;