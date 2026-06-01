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

import "./certificates.css";


function Certificates(){

    const navigate =
    useNavigate();

    const {id} =
    useParams();


    const [certificate,
    setCertificate]
    = useState({

        portfolioId:Number(id),

        certificateName:"",

        organization:"",

        issueDate:"",

        certificateImage:""
    });



    const [resume,
    setResume]
    = useState(null);



    // HANDLE CHANGE

    const handleChange =
    (e)=>{

        setCertificate({

            ...certificate,

            [e.target.name]:
            e.target.value
        });
    };



    // CERTIFICATE IMAGE

    const handleImageUpload =
    async(e)=>{

        const file =
        e.target.files[0];

        const formData =
        new FormData();

        formData.append(
        "file",
        file
        );

        const res =
        await axios.post(

        "http://localhost:8080/upload",

        formData
        );

        setCertificate({

            ...certificate,

            certificateImage:
            res.data
        });
    };



    // RESUME

    const handleResumeUpload =
    async(e)=>{

        const file =
        e.target.files[0];

        const formData =
        new FormData();

        formData.append(
        "file",
        file
        );

        const res =
        await axios.post(

        "http://localhost:8080/upload",

        formData
        );

        setResume(res.data);
    };



    // SUBMIT

    const handleSubmit =
    async()=>{

        await axios.post(

        "http://localhost:8080/saveCertificate",

        certificate
        );



        await axios.post(

        "http://localhost:8080/saveResume",

        {
            portfolioId:id,

            resumeFile:resume
        });



        navigate(`/templates/${id}`);
    };



    return(

        <div className="cert-page">


            {/* HEADER */}

            <div className="cert-header">

                <div className="cert-badge">

                    🏆 Step 5 of 5

                </div>



                <h1>

                    Certificates
                    <span>
                        {" & Resume"}
                    </span>

                </h1>



                <p>

                    Upload your achievements,
                    certifications and resume
                    to complete your premium
                    portfolio.

                </p>

            </div>



            {/* PROGRESS */}

            <div className="cert-progress-container">

                <div className="cert-progress-line">

                    <div className="cert-progress-fill"></div>



                    <div className="cert-progress-orb">

                        <div className="cert-orb-core"></div>

                        <div className="cert-orb-ring"></div>

                    </div>

                </div>

            </div>



            {/* FORM */}

            <div className="cert-box">


                <input
                type="text"

                name="certificateName"

                placeholder=
                "Certificate Name"

                onChange={handleChange}
                />



                <input
                type="text"

                name="organization"

                placeholder=
                "Organization"

                onChange={handleChange}
                />



                <input
                type="text"

                name="issueDate"

                placeholder=
                "Issue Date"

                onChange={handleChange}
                />



                {/* CERTIFICATE */}

                <div className="upload-group">

                    <label>

                        Upload Certificate

                    </label>

                    <input
                    type="file"

                    onChange=
                    {handleImageUpload}
                    />

                </div>



                {/* RESUME */}

                <div className="upload-group">

                    <label>

                        Upload Resume PDF

                    </label>

                    <input
                    type="file"

                    onChange=
                    {handleResumeUpload}
                    />

                </div>



                <button
                onClick={handleSubmit}
                >

                    Generate Portfolio →

                </button>

            </div>

        </div>
    );
}

export default Certificates;