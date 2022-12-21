import "./Login.css"
import { useState } from "react";
import { Link } from "react-router-dom";


function Login(){
    const [login,setLogin] = useState();
    const [Password,setPassword] = useState();

    const admin = "admin";

    return (
        <div className="login">
            <h1>Admin Panel</h1>
            <Link to="../">
            <p>Homepage</p>
            </Link>
            <div className="sign">
                <form>
                    <label>Login</label>
                        <input onChange={(e)=>{
                            setLogin(e.target.value)
                        }}></input>
                    <label>Password</label>
                        <input onChange={(e)=>{
                            setPassword(e.target.value)
                        }}></input>
                        <button>Sign in</button>
                </form>
            </div>
        </div>
    )
}

export default Login;