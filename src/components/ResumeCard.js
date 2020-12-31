import React from 'react';
import Resume from "../assets/resume.png"



function ResumeCard () {
 return (
    <section className="container-fluid resumeblock">
        <div id="maintitle" className="row">
        <div className="col-sm-12">
            <h3>- my resume -</h3>
        </div>
        </div>
        <div className="row">
        <div id="aboutme" className="col-sm-12">
            <div className="resume">
            <embed src={Resume} width="100%" height="auto" padding-top="5px"/>
            </div>
        </div>
        </div>  
    </section>
 )
};

export default ResumeCard;