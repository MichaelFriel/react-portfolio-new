import React from 'react';
import projects from '../projects.json';
import ProjectCard from './ProjectCard';

const ProjectGallery = () => {
    console.log(projects);
    return (
        <div>
          <section id="my-work" className="bg-dark py-3">
            <div className="container-fluid my-3">
              <div className="text-center text-light my-5">
                <h2>My Work</h2>
                <p className="text-light mx-auto" style={{ width: '50%' }}>Take a look at what I have done so far. Each of these tasks has its own Github repository where you can review and contribute!</p>
                <div className="row m-5 align-items-center justify-content-center">
                  {projects.map((item, index) => {
                    return (
                      <div key={index} className="col-10 col-md-8 col-lg-4 col-xl-3 m-2">
                        <ProjectCard Title={item.Title} Description={item.Description} Image={item.Image} Skill1={item.Skill1} Skill2={item.Skill2} Link={item.Link} GitHub={item.GitHub} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        </div>
    );
};

export default ProjectGallery;
