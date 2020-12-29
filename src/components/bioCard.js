import React from 'react';
import headshot from "../assets/headshot.png";


function BioCard () {
    return (
        <section className="container-fluid">
            <div id="maintitle" className="row">
                <div className="col-sm-12">
                    <h3>- about me -</h3>
                </div>
            </div>
            <hr/>
            <div className="row">
            <div id="aboutme" className="col-sm-12">
                <img id="headshot" src={headshot} alt="headshot"/>
                <p>My name is Nic and I am a student in Columbia's Engineering Bootcamp! A little more about me... I live in Manhattan. I just moved here from San Francisco in May 2020 - yes, peak pandemic. It was interesting to say the least. Why did I do it? I've always wanted to live in NYC and I finally landed a new role with my company that relocated me here. It's been a blast. </p> 
                <p>So, what do I do? I currently work in University Recruiting for a tech company. That means I work to pair students with internships and their first jobs out of college. It's extremely rewarding! I started my career in product management after getting a degree in marketing. Product management was amazing, and despite what you might think, there are a lot of similarities between recruiting and product management. But, that's a conversation for a different day.</p>
                <p>And now I'm here - building this website for this bootcamp. I decided that there would likely never been a better time to up-skill myself. I am excited to be able to build applications and content that can reach millions of people and my first personal project will be building a app which helps people interested in social activisim actually activate. More to come on that. ;)</p>
            </div>
            </div>  
        </section>
    )
};

export default BioCard;