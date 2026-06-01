import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Register() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
const handleRegister = async () => {

    try{

        const res = await axios.post(
            "http://localhost:8080/register",
            {
                username,
                password
            }
        );

        alert(res.data.message);

        if(
            res.data.message
            === "Registration Successful"
        ){

            navigate("/");
        }

    }catch(error){

        console.log(error);

        alert("Backend Error");
    }
};
  return (
    <div className="container">

      <div className="box">

        <h1>Register</h1>

        <input
          type="text"
          placeholder="User ID"
          onChange={(e) => setUsername(e.target.value.trim())}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value.trim())}
        />

        <button onClick={handleRegister}>
          Register
        </button>

        <p>
          Already have an account?
          <Link to="/">
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Register;