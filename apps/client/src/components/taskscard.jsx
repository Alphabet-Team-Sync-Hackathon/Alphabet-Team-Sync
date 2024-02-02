import React from "react";

const Taskcard=(props)=>
{
    return(
        <div className="task-card">

            <div className="task-card-flex"> 
            <h4 className="task-name">{props.taskname}</h4>
            <img className="remove-icon" src={props.removicon} />
            </div>

            <div className="task-card-flex"> 
            <h4 className="task-name">{props.status}</h4>
            <img src={props.statusicon} />
            </div>

            <div className="task-card-flex-small">
                <img src={props.dateicon} />
                <h3>{props.date}</h3>
            </div>
            <div className="task-card-flex-small">
                <img src={props.timicon} />
                <h3>{props.time}</h3>
            </div>

            <div className="task-card-flex"> 
            <div className="task-card-flex-small">
                <img src={props.progressicon} />
                <h3>{props.progress}</h3>
            </div>
            <img className='editIcon' src={props.editicon} />
            </div>

        </div>
    );
}

export default Taskcard;