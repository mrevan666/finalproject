import "./Filter.css";
import "./Input.css";
import DataMain from "../dataMain.json";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
 


function Header(props){


    let CountryList = [];
    DataMain.map((e,index)=>{
        CountryList.push(e.tableData["Issuing Country"]);
    })
    const UniqueArray = new Set(CountryList);
    CountryList =  Array.from(UniqueArray);

    let MetalList = [];
    DataMain.map((e,index)=>{
        MetalList.push(e.tableData["Composition"]);
    })
    const SecArray = new Set(MetalList);
    MetalList =  Array.from(SecArray);

    let QualityList = [];
    DataMain.map((e,index)=>{
        QualityList.push(e.tableData["Quality"]);
    })
    const ThirdArray = new Set(QualityList);
    QualityList =  Array.from(ThirdArray);



    const [filter,setFilter] = useState(false);
    const [search, setSearch] = useState('');
    const [select, setSelect] = useState("CANADA");
    const [metal, setMetal] = useState("gold");
    const [minPrice, setMinPrice] = useState("1$");
    const [maxPrice, setMaxPrice] = useState("150$");
    const [minYear, setMinYear] = useState();
    const [maxYear, setMaxYear] = useState();

    const navigate = useNavigate()
    function filteredMethod(){
        setFilter(!filter);
        props.f(filter)
    }

    const selectFunction = (e) =>{
        setSelect(e.target.value);
    }

    const metalFunction = (e) => {
        setMetal(e.target.value)
    }

    const minPriceFunction = (e) => {
        setMinPrice(e.target.value)
    }

    const maxPriceFunction = (e) => {
        setMaxPrice(e.target.value)
    }

    const minYearFunction =(e)=>{
        setMinYear(e);
    }

    const maxYearFunction =(e)=>{
        setMaxYear(e);
    }

   
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/coinlist?search=${search}`)
        
        props.s(search)
        console.log(select);
        console.log(metal);
        
        const any = DataMain.filter((e)=>{
            return e.tableData["Issuing Country"] === select && e.tableData["Composition"] === metal ;
        })
        props.t(any)

    }

    
    return(
        <div className="header">
            <div className="Input">
            <form onSubmit={handleSubmit}>
                <label>Input field</label>
                <div>
                    <input onChange={(e)=>setSearch(e.target.value)}></input>
                    <button type="submit" >Search</button>
                </div>
                <div>
                        <a href="#" onClick={filteredMethod} className="text-dark">Advanced filter</a>
                        <i className="fa-solid fa-chevron-down"></i>
                </div>
                <div className="Filter">
             <div className="inFilter">
                <div className="Left">
                <div>
                    <label>Issuing country</label>
                    <select onChange={selectFunction}>

                        {CountryList.map((e,index)=>{
                           return <option key={index}>{e}</option>
                        })}
                    </select>
                    
                </div>
                <div>
                    <label>Metal</label>
                    <select onChange={metalFunction}>
                        {MetalList.map((e,index)=>{
                           return <option key={index}>{e}</option>
                        })}
                    </select>
                </div>
                <div>
                    <label>Quality of the coin</label>
                    <select>
                        {QualityList.map((e,index)=>{
                           return <option key={index}>{e}</option>
                        })}
                    </select>
                </div>
            </div>
            <div className="Right">
            <div>
                <label>Price</label>
                <label>
                from
                <input onChange={minPriceFunction}>
                </input>
                to
                <input onChange={maxPriceFunction}>
                </input>
                </label>
            </div>
            <div>
                <label>Year of issue</label>
                <label>
                from
                <input onChange={minYearFunction}>
                </input>
                to
                <input onChange={maxYearFunction}>
                </input>
                </label>
            </div>
            </div>
            </div>
            </div>
            </form>
        </div>
        
        </div>
    )
}


export default Header;