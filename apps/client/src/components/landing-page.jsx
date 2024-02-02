import React from "react";
import Landhead from "./landing-page-header";
import { Link } from "react-router-dom";

const Landingpage =()=>
{
   return(<section className="landing-page">
        <div className="side-img"></div>
        <div className="side-text">
            <Landhead header='welcome to the future of micromanaging' />
            <div className="landing-page-btns">
               <Link to="/admin-sign-up"><button>sign up as admin</button></Link>
               <Link to="/invitee-sign-up"><button>sign up as employee</button></Link>
               <Link to="/overview"><button>conitnue to dashboard</button></Link>
            </div>
        </div>
    </section>
    );
}

export default Landingpage;