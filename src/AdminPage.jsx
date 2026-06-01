import { useEffect, useState }
from "react";

import axios from "axios";

import {
useNavigate
}
from "react-router-dom";


function AdminPage(){

    const [users,setUsers]
    = useState([]);

    const navigate =
    useNavigate();


    // SECURITY CHECK
    useEffect(()=>{

        const isAdmin =
        localStorage.getItem("admin");

        if(!isAdmin){

            navigate("/adminlogin");
        }

    },[]);



    // FETCH USERS
    const fetchUsers =
    async () => {

        const res =
        await axios.get(
            "http://localhost:8080/users"
        );

        setUsers(res.data);
    };


    // LOAD USERS
    useEffect(()=>{

        fetchUsers();

    },[]);



    // DELETE USER
    const deleteUser =
    async (id) => {

        await axios.delete(
            `http://localhost:8080/delete/${id}`
        );

        fetchUsers();
    };



    // LOGOUT
    const logout = () => {

        localStorage.removeItem(
            "admin"
        );

        navigate("/adminlogin");
    };



    return(

        <div className="admin-container">

            <button
            className="logout-btn"
            onClick={logout}
            >
                Logout
            </button>


            <h1>
                All Registered Users
            </h1>


            <table>

                <thead>

                    <tr>

                        <th>ID</th>

                        <th>Username</th>

                        <th>Password</th>

                        <th>Action</th>

                    </tr>

                </thead>


                <tbody>

                    {
                        users.map((user)=>(

                            <tr key={user.id}>

                                <td>
                                    {user.id}
                                </td>

                                <td>
                                    {user.username}
                                </td>

                                <td>
                                    {user.password}
                                </td>

                                <td>

                                    <button
                                    onClick={() =>
                                    deleteUser(user.id)}
                                    >
                                        Delete
                                    </button>

                                </td>

                            </tr>
                        ))
                    }

                </tbody>

            </table>

        </div>
    );
}

export default AdminPage;