import React from 'react';
import {CgClose, CgInfo} from "react-icons/cg";
import {useNavigate} from "react-router-dom";

import './Task.css';

const Task = ({task, handleTaskClick, handleTaskRemove}) => {
    const navigate = useNavigate();

    const handleTaskDetailsClick = () => {
        navigate(`/${task.title}`);
    }
    return (
        <div className="task-container"
             style={task.completed ? {borderLeft: '6px solid chartreuse'} : {}}>
            <div className="task-title"
                 onClick={() => handleTaskClick(task.id)}>
                {task.title}
            </div>

            <div className="buttons-container">
                <button className="details-button"
                        onClick={handleTaskDetailsClick}>
                    <CgInfo/>
                </button>
                <button className="remove-task-button"
                        onClick={() => handleTaskRemove(task.id)}>
                    <CgClose/>
                </button>
            </div>

        </div>
    );
};

export default Task;
