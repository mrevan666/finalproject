import Filter from "../../Components/Filter";
import "./Homepage.css";
import Input from '../../Components/Input';
import Bullion from '../../Components/Bullion';
import Exclusive from '../../Components/Exclusive';
import Commemorative from '../../Components/Commemorative';
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function Homepage(){
    const [input,setInput] = useState(true);
    function newFunction(e){
    setInput(e);
    console.log(input);
  }
    return(
        <div className="Homepage">
            <header>
                <h1>Homepage</h1>
                <Input f={newFunction}/>
            </header>
            {!input ? <Filter /> :null}
            <main>
                <Bullion />
                <Exclusive />
                <Commemorative />
            </main>
        </div>
    )
}

export default Homepage;