import React from "react";
import Sidenav from "./sidenav";
import Header from "./headeing";
import Card from "./card";
const Section3 =()=>
{
    return(<section className="sect-3">
        <div className="s1">
            <Sidenav />
        </div>
        <div className="s2">
            <div className="s2-top">
            <Header title="Activity Log" fontSize="25px" textColor="#f7f7f7" />
            <div className="s2-top-infill">
            <Card number ='20' />
            </div>
            </div>
            <div className="s2-bottop"></div>
        </div>
    </section>
    );
}
export default Section3;