import {
useEffect,
useState
}
from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import {
useParams
}
from "react-router-dom";
import "./portfolioPage.css";


// TEMPLATES
import Cyberpunk
from "./template/Cyberpunk";

import Glass
from "./template/Glass";

import Space
from "./template/Space";



function PortfolioPage(){

    // GET URL PARAMS
    const switchTemplate =
(templateName)=>{

    navigate(
    `/portfolio/${id}/${templateName}`
    );
};
 const {id,template}
= useParams();

const navigate =
useNavigate();



    // STORE ALL DATA
    const [portfolio,
    setPortfolio]
    = useState(null);



    // FETCH ALL DATA
    useEffect(()=>{

        fetchPortfolio();

    },[]);




    const fetchPortfolio =
    async () => {

        try{

            // PERSONAL
            const personal =
            await axios.get(
            `http://localhost:8080/personal/${id}`
            );



            // EDUCATION
            const education =
            await axios.get(
            `http://localhost:8080/education/${id}`
            );



            // SKILLS
            const skills =
            await axios.get(
            `http://localhost:8080/skills/${id}`
            );



            // PROJECTS
            const projects =
            await axios.get(
            `http://localhost:8080/projects/${id}`
            );



            // CERTIFICATES
            const certificates =
            await axios.get(
            `http://localhost:8080/certificates/${id}`
            );



            // RESUME
            const resume =
            await axios.get(
            `http://localhost:8080/resume/${id}`
            );



            // SAVE EVERYTHING
            setPortfolio({

                personal:
                personal.data,

                education:
                education.data,

                skills:
                skills.data,

                projects:
                projects.data,

                certificates:
                certificates.data,

                resume:
                resume.data
            });



        }catch(error){

            console.log(
            "Portfolio Fetch Error",
            error
            );
        }
    };



    // LOADING
    if(!portfolio){

        return(

            <div
            style={{

                height:"100vh",

                display:"flex",

                justifyContent:"center",

                alignItems:"center",

                background:"black",

                color:"cyan",

                fontSize:"40px"
            }}
            >

                Loading Portfolio...

            </div>
        );
    }



    // CYBERPUNK TEMPLATE
   if(template === "cyberpunk"){

    return(

        <>
            <div className="template-nav">

                <button
                onClick={()=>
                switchTemplate("cyberpunk")}
                >
                    Cyberpunk
                </button>

                <button
                onClick={()=>
                switchTemplate("glass")}
                >
                    Glass
                </button>

                <button
                onClick={()=>
                switchTemplate("space")}
                >
                    Space
                </button>

            </div>

            <Cyberpunk
            data={portfolio}
            />
        </>
    );
}



    // GLASS TEMPLATE
    if(template === "glass"){

    return(

        <>
            <div className="template-nav">

                <button
                onClick={()=>
                switchTemplate("cyberpunk")}
                >
                    Cyberpunk
                </button>

                <button
                onClick={()=>
                switchTemplate("glass")}
                >
                    Glass
                </button>

                <button
                onClick={()=>
                switchTemplate("space")}
                >
                    Space
                </button>

            </div>

            <Glass
            data={portfolio}
            />
        </>
    );
}


    // SPACE TEMPLATE
    if(template === "space"){

    return(

        <>
            <div className="template-nav">

                <button
                onClick={()=>
                switchTemplate("cyberpunk")}
                >
                    Cyberpunk
                </button>

                <button
                onClick={()=>
                switchTemplate("glass")}
                >
                    Glass
                </button>

                <button
                onClick={()=>
                switchTemplate("space")}
                >
                    Space
                </button>

            </div>

            <Space
            data={portfolio}
            />
        </>
    );
}



    // DEFAULT
    return(

        <div
        style={{

            height:"100vh",

            display:"flex",

            justifyContent:"center",

            alignItems:"center",

            background:"black",

            color:"red",

            fontSize:"40px"
        }}
        >

            Template Not Found

        </div>
    );
}

export default PortfolioPage;