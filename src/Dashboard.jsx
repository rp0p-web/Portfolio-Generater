import "./dashboard.css";

import axios from "axios";

import {
useEffect,
useState
}
from "react";

import {
useNavigate
}
from "react-router-dom";



function Dashboard(){

    const navigate =
    useNavigate();



    const [portfolioName,
    setPortfolioName]

    = useState("");



    const [portfolios,
    setPortfolios]

    = useState([]);



    const userId =
    localStorage.getItem("userId");



    // LOAD PORTFOLIOS

    useEffect(()=>{

        fetchPortfolio();

    },[]);



    const fetchPortfolio =
    async()=>{

        try{

            const response =
            await axios.get(

            `http://localhost:8080/getPortfolio/${userId}`

            );

            setPortfolios(
            response.data
            );

        }

        catch(err){

            console.log(err);
        }
    };



    // CREATE PORTFOLIO

    const createPortfolio =
    async()=>{

        if(!portfolioName){

            alert(
            "Enter portfolio name"
            );

            return;
        }



        try{

            const response =
            await axios.post(

            "http://localhost:8080/createPortfolio",

            {

                portfolioName,

                userId,

                template:"cyberpunk"
            }

            );



            navigate(

            `/personal/${response.data.id}`

            );

        }

        catch(err){

            console.log(err);
        }
    };



    // DELETE

    const deletePortfolio =
    async(id)=>{

        try{

            await axios.delete(

            `http://localhost:8080/deletePortfolio/${id}`

            );

            fetchPortfolio();

        }

        catch(err){

            console.log(err);
        }
    };



    return(

        <div className="dashboard-page">



            {/* HERO */}

            <div className="dashboard-hero">

                <div className="dashboard-label">

                    ✨ AI Powered Portfolio Builder

                </div>



                <h1 className="dashboard-title">

                    Your
                    <span>
                        {" "}Portfolios
                    </span>

                </h1>



                <p className="dashboard-sub">

                    Build futuristic,
                    elegant and professional
                    portfolios with
                    premium templates.

                </p>

            </div>



            {/* CREATE */}

            <div className="dashboard-create">

                <div className="dashboard-create-left">

                    <h2
                    className=
                    "dashboard-create-title"
                    >

                        Create New Portfolio

                    </h2>



                    <p
                    className=
                    "dashboard-create-text"
                    >

                        Design stunning portfolios
                        with Cyberpunk,
                        Glassmorphism
                        and Space templates.

                    </p>

                </div>



                <div className="dashboard-form">

                    <input

                    type="text"

                    placeholder=
                    "Portfolio Name"

                    value={portfolioName}

                    onChange={(e)=>

                    setPortfolioName(
                    e.target.value
                    )
                    }

                    className=
                    "dashboard-input"
                    />



                    <button

                    onClick={
                    createPortfolio
                    }

                    className=
                    "dashboard-btn"
                    >

                        Create Portfolio

                    </button>

                </div>

            </div>



            {/* PORTFOLIOS */}

            <div className="dashboard-section">

                <h2
                className=
                "dashboard-section-title"
                >

                    Your Created Portfolios

                </h2>



                {

                    portfolios.length === 0 ?

                    (

                        <div
                        className=
                        "dashboard-empty"
                        >

                            <h2>

                                No Portfolio Yet

                            </h2>

                            <p>

                                Create your first
                                futuristic portfolio.

                            </p>

                        </div>
                    )

                    :

                    (

                        <div
                        className=
                        "dashboard-grid"
                        >

                            {

                                portfolios.map(

                                (portfolio)=>(

                                    <div

                                    className=
                                    "dashboard-card"

                                    key={
                                    portfolio.id
                                    }
                                    >

                                        <div
                                        className=
                                        "dashboard-template"
                                        >

                                            {
                                            portfolio.template
                                            }

                                        </div>



                                        <h3>

                                            {
                                            portfolio.portfolioName
                                            }

                                        </h3>



                                        <p>

                                            Futuristic
                                            portfolio with
                                            professional
                                            design.

                                        </p>



                                        <div
                                        className=
                                        "dashboard-actions"
                                        >

                                            <button

                                            className=
                                            "dashboard-btn"

                                            onClick={()=>

                                            navigate(

                                            `/portfolio/${portfolio.id}/${portfolio.template}`

                                            )
                                            }
                                            >

                                                Open

                                            </button>



                                            <button

                                            className=
                                            "dashboard-delete"

                                            onClick={()=>

                                            deletePortfolio(
                                            portfolio.id
                                            )
                                            }
                                            >

                                                Delete

                                            </button>

                                        </div>

                                    </div>
                                ))
                            }

                        </div>
                    )
                }

            </div>

        </div>
    );
}

export default Dashboard;