import "./Filter.css";
import DataMain from "../dataMain.json"
 


function Filter(){
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
    return(
        <div className="Filter">
            <div className="Left">
                <form>
                    <label>Issuing country</label>
                    <select>
                        {CountryList.map((e,index)=>{
                           return <option key={index}>{e}</option>
                        })}
                    </select>
                    
                </form>
                <form>
                    <label>Metal</label>
                    <select>
                        {MetalList.map((e,index)=>{
                           return <option key={index}>{e}</option>
                        })}
                    </select>
                </form>
                <form>
                    <label>Quality of the coin</label>
                    <select>
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
        </div>
    )
}


export default Filter;