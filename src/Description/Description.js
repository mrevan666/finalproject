import "./Description.css";
import { useParams } from "react-router-dom";

function Description(props){
    const {id} = useParams();
    console.log(id);

    return(
        <div className="description">
            {props.data.filter((e,index)=>{
                return e.id == id;
            }).map((e,index)=>{
                return(
                    <div className="item" key={index}>
                <div className="images">
                    <img src={`../${e.tableData["imgUrlFront"]}`}></img>
                    <img src={`../${e.tableData["imgUrlBack"]}`}></img>
                </div>
                <aside>
                    <h1>{e.name}</h1>
                    <p>"Canadian beaver". Unique coin with the image of a beaver. Face value - 5 cents. Created under Elizabeth II.

                        In the center of the obverse is a portrait of Queen Elizabeth II, the profile is directed to the right. The inscription on the left semicircle (English) ELIZABETH II, on the right semicircle D · G · REGINA (ELIZABETH II QUEEN by the Grace of GOD) with dots. Below is a mint mark.

                        In the center of the coin reverse is a Canadian beaver on a rock sticking out of the water. At the top is a semicircle with the inscription "5 cents" between two maple leaves. At the bottom in two lines is the inscription CANADA (CANADA) and the year of minting.
                    </p>                        
                <table>
                    <tr>
                        <td>Issuing Country</td>
                        <td>Composition</td>
                    </tr>
                    <tr>
                        <td>Composition</td>
                        <td>Composition</td>
                    </tr>
                    <tr>
                        <td>Quality</td>
                        <td>Composition</td>
                    </tr>
                    <tr>
                        <td>Denomination</td>
                        <td>Composition</td>
                    </tr>
                    <tr>
                        <td>Year</td>
                        <td>Composition</td>
                    </tr>
                    <tr>
                        <td>Weight</td>
                        <td>Composition</td>
                    </tr>
                    <tr>
                        <td>Price</td>
                        <td>Composition</td>
                    </tr>
                </table>

                <a href="../">Back to the list</a>
                </aside>
            </div>
                )
            })}
            
        </div>
    )
}

export default Description;