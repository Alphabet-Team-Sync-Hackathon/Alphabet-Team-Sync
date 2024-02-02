import React from "react";
import Sidenav from "./sidenav";
import Header from "./headeing";
import Card from "./card";
import employees from "./emplyeedata";
const Section1=()=>
{
    return(
        <section className='section-1'>
        <div className='side-1'>  
        <Sidenav />
        </div>
  
        <div className='side-2'>
  
        <div className='middle-part'>
          <div className='top-part'>
            <Header title="over view" fontSize="30px"/>
            <div className='cards'>
  
              <div className='cards-1'>
                  <Card  title='current tasks' number ='20' />
                  <Card title='employee total' number ='3' />
              </div>
  
              <div className='cards-1'>
                  <Card title='tasks done' number ='101' />
                  <Card  title='milestones hit' number ='245'/>
              </div>
  
            </div>
          </div>
          <div className='bottom-part'>
          <Header title="task tracker" fontSize="30px"/>
          <div className='task-tracker-u'>
  
          <div className='task-tracker'>
          <table className="table-empl">
      <thead>
        <tr>
          <th>Employee Name</th>
          <th>Current Tasks</th>
          <th>Done Tasks</th>
          <th>Total Tasks</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee, index) => (
          <tr className="table-row" key={index}>
            <td>{employees[0].name}</td>
            <td>{employees[0].currentTasks}</td>
            <td>{employees[0].doneTasks}</td>
            <td>{employees[0].totalTasks}</td>
          </tr>
        ))}
      </tbody>
    </table>
          </div>
  
          </div>
          </div>
        </div>
  
        </div>
        <div className='side-3'>
          <div className='side-3-container'>
            
          </div>
        </div>
      </section>
    );
};

export default Section1;