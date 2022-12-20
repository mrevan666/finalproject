import "./Input.css";
import { useState } from "react";

function Input(props){
    const [filter,setFilter] = useState(false);

    function filteredMethod(){
        setFilter(!filter);
        props.f(filter)
    }
    const [search, setSearch] = useState();
    return(
        <div className="Input">
            <form>
                <label>Input field</label>
                <div>
                    <input value={search}></input>
                    <button onClick={(e)=>{setSearch(search+"aleykum")}}>Search</button>
                </div>
                <div>
                        <a href="#" onClick={filteredMethod} className="text-dark">Advanced filter</a>
                        <i className="fa-solid fa-chevron-down"></i>
                </div>
                
            </form>
        </div>
    )
}

export default Input;