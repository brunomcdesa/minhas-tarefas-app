import React from 'react';
import {useNavigate, useParams} from "react-router-dom";

import Button from "./Button";
import "./TaskDetails.css";

const TaskDetails = () => {
    const params = useParams();
    const navigate = useNavigate();

    const handleBackButtonClick = () => {
        navigate(-1);
    }

    return (
        <>
            <div className="back-button-details">
                <Button onclick={handleBackButtonClick}>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
        </>
    );
};

export default TaskDetails;
