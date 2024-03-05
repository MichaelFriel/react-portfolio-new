import React from 'react';

const Hero = () => {

    const heroBackground = '#1f8999'

  return (
    <div className="container-fluid">
      <div className="row justify-content-around align-items-center pb-5" style={{ backgroundColor: heroBackground }}>
        <div className="col-md-5 col-lg-5 text-md-start m-5">
          <h1>
            <div className="display-4 my-4 text-light">
              Welcome to my Portfolio.
            </div>
          </h1>

          <p className="lead bg-light p-3">
            I'm Michael Friel.<br />It's a pleasure to have you.
          </p>
        </div>

        <div className="col-md-10 col-lg-5 text-center my-4">
          <img
            src="src/assets/profille-picture.jpeg"
            className="img-fluid rounded-circle"
            alt="profile image"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
