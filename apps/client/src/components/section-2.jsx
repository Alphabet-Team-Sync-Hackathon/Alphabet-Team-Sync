import React, { useState } from 'react';
import Sidenav from './sidenav';
import Header from './headeing';
// import Button from './button';
// import Btnremove from './removebtn';
import $ from "jquery";
import Taskcard from './taskscard';
import tasksInfo from './tasksinfo';
import TaskCreationOverlay from './createtask-overylay';
import TaskForm from './taskform';

const createTaskCard = (tasky) => (
  <Taskcard
    taskname={tasky.taskName}
    status={tasky.headin}
    removicon={tasky.removeIcon}
    dateicon={tasky.taskDateicon}
    date={tasky.taskDate}
    timicon={tasky.taskTimeicon}
    time={tasky.taskTime}
    progressicon={tasky.taskStatusIcon}
    progress={tasky.taskStatus}
    editicon={tasky.taskEditIcon}
  />
);

const Section2 = () => {
  const [isOverlayVisible, setOverlayVisible] = useState(false);
  const [isBtnVisible, setBtnVisible] = useState(false);

  const handleOpenOverlay = () => {
    setOverlayVisible(true);
  };

  const handleCloseOverlay = () => {
    setOverlayVisible(false);
  };

  const handleBtnClick = () => {
    console.log("remove task has been clicked");
    $(".cancle").css("display", "block");
    $(".remove-icon").css("opacity", "1");
    setBtnVisible(true);
  };

  const handleCancle = () => {
    console.log("cancle remove task has been clicked");
    setBtnVisible(false);
    $(".remove-icon").css("opacity", "0");
  };
  

  return (
    <section className="section-2">
      <div className="sect-2-side1">
        <Sidenav />
      </div>
      <div className="sect-2-side2">
        <div className="side2-top">
          <Header title="Tasks" />
        </div>
        <div className="bttns">
        <button className='button' onClick={handleOpenOverlay}>create task</button>
        <button className='button' onClick={handleBtnClick}>remove task</button>
        {isBtnVisible && (
          <button className='button cancle' onClick={handleCancle}>cancel</button>
        )}
      </div>
        <div className="Task-cards">{tasksInfo.map(createTaskCard)}</div>
        {isOverlayVisible && <TaskCreationOverlay onClose={handleCloseOverlay} />}
      </div>
    </section>
  );
};

export default Section2;