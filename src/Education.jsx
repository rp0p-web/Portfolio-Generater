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

import "./education.css";


function Education(){

    const navigate =
    useNavigate();

    const {id} =
    useParams();



    const [educations,
    setEducations]
    = useState([

        {
           portfolioId:Number(id),

            collegeName:"",

            degree:"",

            department:"",

            cgpa:"",

            startYear:"",

            endYear:""
        }
    ]);


    // HANDLE CHANGE
    const handleChange =
    (index,e) => {

        const values =
        [...educations];

        values[index]
        [e.target.name]
        = e.target.value;

        setEducations(values);
    };



    // ADD EDUCATION
    const addEducation =
    () => {

        setEducations([

            ...educations,

            {
                portfolioId:Number(id),

                collegeName:"",

                degree:"",

                department:"",

                cgpa:"",

                startYear:"",

                endYear:""
            }
        ]);
    };



    // REMOVE EDUCATION
    const removeEducation =
    (index) => {

        const values =
        [...educations];

        values.splice(index,1);

        setEducations(values);
    };



    // SAVE ALL
    const handleSubmit =
    async () => {

        for(let edu of educations){

            await axios.post(
            "http://localhost:8080/saveEducation",
            edu
            );
        }

        navigate(`/skills/${id}`);
    };



    return(

        <div className="education-page">

           


            <div className="education-header">

    <div className="education-badge">

        🎓 Step 2 of 5

    </div>
    

    <h1>

        Your
        <span>
            {" "}Education
        </span>

    </h1>

    <p>

        Add your academic
        journey to build an
        elegant professional
        portfolio.

    </p>
     {/* PROGRESS */}

            <div className="progress-progress-container">

                <div className="progress-progress-line">

                   <div className="progress-progress-fill"></div>

<div className="progress-progress-orb">

    <div className="orb-progress-core"></div>

    <div className="orb-progress-ring"></div>

</div>

                </div>

            </div>


</div>



            {
                educations.map(
                (edu,index)=>(

                    <div
                    className=
                    "education-card"

                    key={index}
                    >

                        <input
                        type="text"

                        name="collegeName"

                        placeholder=
                        "College Name"

                        onChange={(e)=>
                        handleChange(
                        index,e)}
                        />



                        <input
                        type="text"

                        name="degree"

                        placeholder=
                        "Degree"

                        onChange={(e)=>
                        handleChange(
                        index,e)}
                        />



                        <input
                        type="text"

                        name="department"

                        placeholder=
                        "Department"

                        onChange={(e)=>
                        handleChange(
                        index,e)}
                        />



                        <input
                        type="text"

                        name="cgpa"

                        placeholder=
                        "CGPA"

                        onChange={(e)=>
                        handleChange(
                        index,e)}
                        />



                        <input
                        type="text"

                        name="startYear"

                        placeholder=
                        "Start Year"

                        onChange={(e)=>
                        handleChange(
                        index,e)}
                        />



                        <input
                        type="text"

                        name="endYear"

                        placeholder=
                        "End Year"

                        onChange={(e)=>
                        handleChange(
                        index,e)}
                        />



                        <button
                        className=
                        "remove-btn"

                        onClick={()=>
                        removeEducation(
                        index)}
                        >
                            Remove
                        </button>

                    </div>
                ))
            }



            <div className="button-group">

                <button
                onClick={addEducation}
                >
                    Add More
                </button>


                <button
                onClick={handleSubmit}
                >
                    Next
                </button>

            </div>

        </div>
    );
}

export default Education;