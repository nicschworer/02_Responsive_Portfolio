import React from 'react';



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
            <embed src="assets/resume.pdf" width="100%" height="1200px" padding-top="20px"/>
            </div>
        </div>
        </div>  
    </section>
 )
};

export default ResumeCard;