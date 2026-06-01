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

import "./personal.css";

function PersonalDetails(){

    const navigate =
    useNavigate();

    const {id} =
    useParams();


    const [formData,
    setFormData]
    = useState({

       portfolioId:Number(id),

        fullName:"",
        email:"",
        phone:"",
        address:"",
        linkedin:"",
        github:"",
        bio:"",
        profileImage:""
    });



    const handleChange =
    (e)=>{

        setFormData({

            ...formData,

            [e.target.name]:
            e.target.value
        });
    };



    const handleSubmit =
    async()=>{

        await axios.post(

        "http://localhost:8080/savePersonal",

        formData
        );

        navigate(`/education/${id}`);
    };



    return(

        <div className="personal-page">


            {/* GLOW */}

            <div className="glow glow1"></div>

            <div className="glow glow2"></div>



            {/* TOP SECTION */}

            <div className="top-section">

                <div className="step-badge">

                    ✨ Step 1 of 5

                </div>



                <h1>

                    Build Your
                    <span>
                        {" "}Identity
                    </span>

                </h1>



                <p>

                    Let’s create your
                    futuristic professional
                    portfolio profile.

                </p>

            </div>



            {/* PROGRESS */}

          <div className="progress-container">

    <div className="progress-line">

        <div className="progress-fill"></div>

        <div className="progress-orb">

            <div className="orb-core"></div>

            <div className="orb-ring"></div>

        </div>

    </div>

</div>



            {/* FORM */}

            <div className="personal-box">

                <div className="form-grid">


                    <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    onChange={handleChange}
                    />


                    <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    onChange={handleChange}
                    />


                    <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    onChange={handleChange}
                    />


                    <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    onChange={handleChange}
                    />


                    <input
                    type="text"
                    name="linkedin"
                    placeholder="LinkedIn Profile"
                    onChange={handleChange}
                    />


                    <input
                    type="text"
                    name="github"
                    placeholder="GitHub Profile"
                    onChange={handleChange}
                    />


                    <textarea
                    name="bio"
                    placeholder="Tell something about yourself..."
                    onChange={handleChange}
                    />

                </div>



                <button
                onClick={handleSubmit}
                >

                    Continue →

                </button>

            </div>

        </div>
    );
}

export default PersonalDetails;