import { useState } from "react";

import axios from "axios";

import {
  useNavigate,
  Link
} from "react-router-dom";

function Login() {

  const [username,
  setUsername]
  = useState("");

  const [password,
  setPassword]
  = useState("");

  const navigate =
  useNavigate();



  const handleLogin =
  async () => {

    try{

      const res =
      await axios.post(
      "http://localhost:8080/login",
      {
        username,
        password
      });




      // SUCCESS LOGIN
      if(res.data.success){

        // STORE USER DATA
        localStorage.setItem(
          "userId",
          res.data.id
        );

        localStorage.setItem(
          "username",
          res.data.username
        );



        // GO DASHBOARD
        navigate("/dashboard");

      }else{

        alert(
        "Invalid Username or Password"
        );
      }

    }catch(error){

      console.log(error);

      alert(
      "Backend Error"
      );
    }
  };



  return(

    <div className="container">

      {/* ADMIN BUTTON */}

      <button
      className="admin-btn"

      onClick={() =>
      navigate("/admin")}
      >
        Admin
      </button>



      {/* LOGIN BOX */}

      <div className="box">

        <h1>
          Login
        </h1>



        {/* USERNAME */}

        <input
        type="text"

        placeholder="User ID"

        value={username}

        onChange={(e)=>
        setUsername(
          e.target.value.trim()
        )}
        />



        {/* PASSWORD */}

        <input
        type="password"

        placeholder="Password"

        value={password}

        onChange={(e)=>
        setPassword(
          e.target.value.trim()
        )}
        />



        {/* LOGIN BUTTON */}

        <button
        onClick={handleLogin}
        >
          Submit
        </button>



        {/* REGISTER */}

        <p>

          Don't have an account?

          <Link to="/register">

            Register Here

          </Link>

        </p>

      </div>

    </div>
  );
}

export default Login;