import "./Filter.css";
import DataMain from "../dataMain.json"
import { useState } from "react";
 


function Filter(props){


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


    const [ deyer , setDeyer ] = useState();

    const herHansi = () =>{
        props.t(deyer)
    }

    props.t()

    

    

    


    // let countryCondition = countrySelectValue !== "All" ? filterItemCountry == countrySelectValue : filterItem;
    return(
        <div className="Filter">
            <form>
            <div className="Left">
                <form>
                    <label onClick={herHansi}>Issuing country</label>
                    <select onChange={
                        (e)=>{
                            setDeyer(e.target.value)
                        }
                    }>
                        <option>All</option>
                        {CountryList.map((e,index)=>{
                           return <option key={index}>{e}</option>
                        })}
                    </select>
                    
                </form>
                <form>
                    <label>Metal</label>
                    <select>
                        <option>All</option>
                        {MetalList.map((e,index)=>{
                           return <option key={index}>{e}</option>
                        })}
                    </select>
                </form>
                <form>
                    <label>Quality of the coin</label>
                    <select>
                        <option>All</option>
                        {QualityList.map((e,index)=>{
                           return <option key={index}>{e}</option>
                        })}
                    </select>
                </form>
            </div>
            <div className="Right">
            <form>
                <label>Price</label>
                <label>
                from<input></input>to<input></input>
                </label>
            </form>
            <form>
                <label>Year of issue</label>
                <label>
                from<input></input>to<input></input>
                </label>
            </form>
            </div>
            </form>
        </div>
    )
}


export default Filter;