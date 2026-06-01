import { useState,} from "react";
import { useEffect } from "react";

import axios from "axios";


import { useNavigate } from "react-router-dom";

function AdminLogin(){

    const [username,setUsername] = useState("");

    const [password,setPassword] = useState("");

    const navigate = useNavigate();
useEffect(()=>{

    const isAdmin =
    localStorage.getItem("admin");

    if(!isAdmin){

        navigate("/admin");
    }

},[]);

    const handleAdminLogin = async () => {

    try{

        const res = await axios.post(
            "http://localhost:8080/adminlogin",
            {
                username,
                password
            }
        );

        if(res.data.success){

    localStorage.setItem(
        "admin",
        "true"
    );

    navigate("/adminPage");
}
        else{

            alert("Invalid Admin Credentials");
        }

    }catch(error){

        console.log(error);

        alert("Backend Error");
    }
};


    return(

        <div className="container">

            <div className="box">

                <h1>Admin Login</h1>

                <input
                type="text"
                placeholder="Admin Username"
                onChange={(e)=>
                setUsername(e.target.value)}
                />

                <input
                type="password"
                placeholder="Admin Password"
                onChange={(e)=>
                setPassword(e.target.value)}
                />

                <button
                onClick={handleAdminLogin}>
                    Login
                </button>

            </div>

        </div>
    );
}

export default AdminLogin;