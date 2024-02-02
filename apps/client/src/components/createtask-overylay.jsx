import React from "react";
import TaskForm from "./taskform";

const TaskCreationOverlay = ({ onClose }) => {
  
    return (
      <div className="overlay">
        <TaskForm />
        <button className="btn-close" onClick={onClose}>Close</button>
      </div>
    );
  };
  
  export default TaskCreationOverlay;