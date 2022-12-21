import "./Coin.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CoinList.css";
import { useState } from 'react';
import { Link, useParams } from "react-router-dom";
import DataMain from "../../dataMain.json"
import Header from "../../Components/Header"


function CoinList(){
    const [input,setInput] = useState(true);
    const [searchText,setsearchText] = useState("");
    const [selectValue,setselectValue] = useState(DataMain);

    function newFunction(e){
        setInput(e);
    }

    function searchValueFunction(a){
        setsearchText(a)
    }

    function selectValueFunction(b){
        setselectValue(b);
    }
    console.log(searchText)
    console.log(selectValue.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase())));
        
    const {category} = useParams();
    return(
        
        <div className="Coin">
        <div className="CoinList">
                <header>
                <h1>List of the coin</h1>
                <Link to="../">
                    <p className="text-dark">Homepage — List of the coins</p> 
                </Link>
                <Header f={newFunction} s={searchValueFunction} t={selectValueFunction}/>
                 </header>
                    
                    </div>

        { DataMain.filter((e)=>{
            return e.tableData["category"] == category}).map((e)=>{
                return   (<div className="coin" key={e.id}>
                <div className="d-flex flex-row">
                <Link to={`/description/${e.id}`}>
                    <img src={`../${e.tableData["imgUrlFront"]}`} alt="urlfront" />
                </Link>
                    <div>
                        <h3>{e.name}</h3>
                        <p>{e.description["firstParagraph"]}</p>
                    </div>
                </div>
               </div>)
           })
        }
        {
            selectValue.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase())).map((e) => {
                return (<div className="coin" key={e.id}>
                    <div className="d-flex flex-row">
                        <Link to={`/description/${e.id}`}>
                            <img src={`../${e.tableData["imgUrlFront"]}`} alt="imgFr" />
                        </Link>
                        <div>
                            <h3>{e.name}</h3>
                            <p>{e.description["firstParagraph"]}</p>
                        </div>
                    </div>
                </div>)
            })
        }
        </div>
    )
}

export default CoinList;