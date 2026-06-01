import {
useNavigate,
useParams
}
from "react-router-dom";

import "./templates.css";


function Templates(){

    const navigate =
    useNavigate();

    const {id} =
    useParams();


    const selectTemplate =
    (template) => {

        navigate(
        `/portfolio/${id}/${template}`
        );
    };


    return(

        <div className="templates-page">

            <h1>
                Choose Your Template
            </h1>


            <div className="template-grid">

                {/* TEMPLATE 1 */}

                <div
                className=
                "template-card cyber"

                onClick={()=>
                selectTemplate(
                "cyberpunk")}
                >

                    <h2>
                        Cyberpunk
                    </h2>

                </div>



                {/* TEMPLATE 2 */}

                <div
                className=
                "template-card glass"

                onClick={()=>
                selectTemplate(
                "glass")}
                >

                    <h2>
                        Glassmorphism
                    </h2>

                </div>



                {/* TEMPLATE 3 */}

                <div
                className=
                "template-card space"

                onClick={()=>
                selectTemplate(
                "space")}
                >

                    <h2>
                        Space Future
                    </h2>

                </div>

            </div>

        </div>
    );
}

export default Templates;