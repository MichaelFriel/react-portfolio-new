import React from 'react';

const ProjectCard = ({ Title, Description, Image, Skill1, Skill2, Link, GitHub }) => {
  return (
    <div className="card mb-4">
      <a className="text-decoration-none" target="_blank" href={Link}>
        <img src={Image} className="card-img-top" alt="Screenshot of original portfolio" />
      </a>
      <div className="card-body">
        <h5 className="card-title">{Title}</h5>
        <p className="card-text">{Description}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item text-muted">{Skill1}</li>
        <li className="list-group-item text-muted">{Skill2}</li>
      </ul>
    </div>
  );
};

export default ProjectCard;
