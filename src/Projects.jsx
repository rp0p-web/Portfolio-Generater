import {
useState
}
from "react";

import axios from "axios";

import {
useNavigate,
useParams
}
from "react-router-dom";

import "./projects.css";


function Projects(){

    const navigate =
    useNavigate();

    const {id} =
    useParams();


    const [projects,
    setProjects]
    = useState([

        {
            portfolioId:Number(id),

            projectName:"",

            description:"",

            githubLink:"",

            demoLink:"",

            projectImage:""
        }
    ]);


    // HANDLE CHANGE

    const handleChange =
    (index,e)=>{

        const values =
        [...projects];

        values[index]
        [e.target.name]
        = e.target.value;

        setProjects(values);
    };



    // ADD PROJECT

    const addProject =
    ()=>{

        setProjects([

            ...projects,

            {
                portfolioId:Number(id),

                projectName:"",

                description:"",

                githubLink:"",

                demoLink:"",

                projectImage:""
            }
        ]);
    };



    // REMOVE PROJECT

    const removeProject =
    (index)=>{

        const values =
        [...projects];

        values.splice(index,1);

        setProjects(values);
    };



    // SUBMIT

    const handleSubmit =
    async()=>{

        for(let project of projects){

            await axios.post(

            "http://localhost:8080/saveProject",

            project
            );
        }

        navigate(`/certificates/${id}`);
    };



    return(

        <div className="projects-page">


            {/* HEADER */}

            <div className="projects-header">

                <div className="projects-badge">

                    🚀 Step 4 of 5

                </div>



                <h1>

                    Your
                    <span>
                        {" "}Projects
                    </span>

                </h1>



                <p>

                    Showcase your best
                    creations and professional
                    development work beautifully.

                </p>

            </div>



            {/* PROGRESS */}

            <div className="projects-progress-container">

                <div className="projects-progress-line">

                    <div className="projects-progress-fill"></div>



                    <div className="projects-progress-orb">

                        <div className="projects-orb-core"></div>

                        <div className="projects-orb-ring"></div>

                    </div>

                </div>

            </div>



            {/* PROJECTS */}

            {

                projects.map(

                (project,index)=>(

                    <div
                    className="project-card"
                    key={index}
                    >


                        <input
                        type="text"

                        name="projectName"

                        placeholder=
                        "Project Name"

                        onChange={(e)=>
                        handleChange(index,e)}
                        />



                        <textarea
                        name="description"

                        placeholder=
                        "Project Description"

                        onChange={(e)=>
                        handleChange(index,e)}
                        />



                        <input
                        type="text"

                        name="githubLink"

                        placeholder=
                        "GitHub Repository"

                        onChange={(e)=>
                        handleChange(index,e)}
                        />



                        <input
                        type="text"

                        name="demoLink"

                        placeholder=
                        "Live Demo URL"

                        onChange={(e)=>
                        handleChange(index,e)}
                        />



                        <input
                        type="text"

                        name="projectImage"

                        placeholder=
                        "Project Image URL"

                        onChange={(e)=>
                        handleChange(index,e)}
                        />



                        {

                            projects.length > 1 && (

                                <button

                                className=
                                "remove-btn"

                                onClick={()=>
                                removeProject(index)}
                                >

                                    Remove Project

                                </button>
                            )
                        }

                    </div>
                ))
            }



            {/* BUTTONS */}

            <div className="projects-button-group">

                <button
                onClick={addProject}
                >

                    + Add Project

                </button>



                <button
                onClick={handleSubmit}
                >

                    Continue →

                </button>

            </div>

        </div>
    );
}

export default Projects;