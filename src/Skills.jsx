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

import "./skills.css";


function Skills(){

    const navigate =
    useNavigate();

    const {id} =
    useParams();


    const [skills,
    setSkills]
    = useState([

        {
           portfolioId:Number(id),

            skillName:"",

            skillLevel:"",

            category:""
        }
    ]);


    // HANDLE CHANGE

    const handleChange =
    (index,e)=>{

        const values =
        [...skills];

        values[index]
        [e.target.name]
        = e.target.value;

        setSkills(values);
    };



    // ADD SKILL

    const addSkill =
    ()=>{

        setSkills([

            ...skills,

            {
                portfolioId:Number(id),

                skillName:"",

                skillLevel:"",

                category:""
            }
        ]);
    };



    // REMOVE

    const removeSkill =
    (index)=>{

        const values =
        [...skills];

        values.splice(index,1);

        setSkills(values);
    };



    // SUBMIT

    const handleSubmit =
    async()=>{

        for(let skill of skills){

            await axios.post(

            "http://localhost:8080/saveSkill",

            skill
            );
        }

        navigate(`/projects/${id}`);
    };



    return(

        <div className="skills-page">


            {/* HEADER */}

            <div className="skills-header">

                <div className="skills-badge">

                    ⚡ Step 3 of 5

                </div>



                <h1>

                    Your
                    <span>
                        {" "}Skills
                    </span>

                </h1>



                <p>

                    Showcase your technical
                    strengths and professional
                    expertise beautifully.

                </p>

            </div>



            {/* PROGRESS */}

            <div className="skills-progress-container">

                <div className="skills-progress-line">

                    <div className="skills-progress-fill"></div>



                    <div className="skills-progress-orb">

                        <div className="skills-orb-core"></div>

                        <div className="skills-orb-ring"></div>

                    </div>

                </div>

            </div>



            {/* SKILLS */}

            {

                skills.map(

                (skill,index)=>(

                    <div
                    className="skill-card"
                    key={index}
                    >


                        <input
                        type="text"

                        name="skillName"

                        placeholder=
                        "Skill Name"

                        onChange={(e)=>
                        handleChange(index,e)}
                        />



                        <select
                        name="skillLevel"

                        onChange={(e)=>
                        handleChange(index,e)}
                        >

                            <option>
                                Skill Level
                            </option>

                            <option>
                                Beginner
                            </option>

                            <option>
                                Intermediate
                            </option>

                            <option>
                                Advanced
                            </option>

                            <option>
                                Expert
                            </option>

                        </select>



                        <select
                        name="category"

                        onChange={(e)=>
                        handleChange(index,e)}
                        >

                            <option>
                                Category
                            </option>

                            <option>
                                Frontend
                            </option>

                            <option>
                                Backend
                            </option>

                            <option>
                                Database
                            </option>

                            <option>
                                Tools
                            </option>

                            <option>
                                Soft Skills
                            </option>

                        </select>



                        {

                            skills.length > 1 && (

                                <button

                                className=
                                "remove-btn"

                                onClick={()=>
                                removeSkill(index)}
                                >

                                    Remove Skill

                                </button>
                            )
                        }

                    </div>
                ))
            }



            {/* BUTTONS */}

            <div className="skills-button-group">

                <button
                onClick={addSkill}
                >

                    + Add Skill

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

export default Skills;