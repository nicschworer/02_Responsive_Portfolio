import Projects from "../models/projects";
import ProjectCard from "../components/ProjectCard";


function Portfolio () {
    return (    
        <div className="container-fluid conport">
            <div id="maintitle" className="row">
                <div className="col-sm-12">
                    <h3>- here's the tea -</h3>
                    <div className="row portrow">
                    {Projects.map((proj) => (
                        < ProjectCard project={proj} />
                        ))
                    }
                </div>
                    {/* {Projects.map((proj, inx) => {
                        return (
                        <div className="col-md-4">
                        <img className="portpic" src={img[inx]} alt={proj.alt}/>
                            <div className="middle">
                                <a className="text" href={proj.git}>{proj.name}</a>
                            </div>
                        </div>
                        )}
                    )
                    } */}
                </div>
            </div>
        <hr></hr>
        </div>
    )
};

export default Portfolio; 



