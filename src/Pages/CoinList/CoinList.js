import "./Coin.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Filter from "../../Components/Filter";
import "./CoinList.css";
import Input from '../../Components/Input';
import { useState } from 'react';
import { Link, Route, Routes, useLocation, useParams } from "react-router-dom";
import DataMain from "../../dataMain.json"

const query = () => {
    console.log(window.location)
    return new URLSearchParams(new URL(window.location).search)
}

function CoinList(){
    const [input,setInput] = useState(true);
    function newFunction(e){
    setInput(e);
    }
        
    const {category , ...others} = useParams();
    const searchValue = query().get("search")
    console.log(searchValue)
    return(
        
        <div className="Coin">
        <div className="CoinList">
                <header>
                <h1>List of the coin</h1>
                <Link to="../">
                    <a href="#" className="text-dark">Homepage — List of the coins</a> 
                </Link>
                <Input f={newFunction}/>
                 </header>
                    {!input ? <Filter /> :null}
                    </div>

        {category && DataMain.filter((e)=>{
            return e.tableData["category"]==category}).map((e,index)=>{
                return   (<div className="coin" key={index}>
                <div className="d-flex flex-row">
                <Link to={`/description/${e.id}`}>
                    <img src={`../${e.tableData["imgUrlFront"]}`} />
                </Link>
                    <div>
                        <h3>{e.name}</h3>
                        <p>{e.description.firstParagraph}</p>
                    </div>
                </div>
               </div>)
           })
        }
        {
             DataMain.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase())).map((e) => (
                <div className="coin" key={e.id}>
                <div className="d-flex flex-row">
                <Link to={`/description/${e.id}`}>
                    <img src={`../${e.tableData["imgUrlFront"]}`} />
                </Link>
                    <div>
                        <h3>{e.name}</h3>
                        <p>{e.description.firstParagraph}</p>
                    </div>
                </div>
               </div>
            ))
           }
        </div>
    )
}

export default CoinList;