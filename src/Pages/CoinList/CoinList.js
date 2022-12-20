import "./Coin.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Filter from "../../Components/Filter";
import "./CoinList.css";
import Input from '../../Components/Input';
import { useState } from 'react';
import { Link, Route, Routes, useParams } from "react-router-dom";
import DataMain from "../../dataMain.json"

function BullionCoins(){
    const [input,setInput] = useState(true);
    function newFunction(e){
    setInput(e);
    }
    
    
    const {category} = useParams();
    console.log(category)
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

        {DataMain.filter((e)=>{
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
        </div>
    )
}

export default BullionCoins;