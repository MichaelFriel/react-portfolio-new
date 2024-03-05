import React from 'react';

const Navigation = () => {

    const primaryColor = '#708090'
    const secondaryColor = '#00ff00';

  return (
    <>
      
        <nav className="navbar navbar-expand-lg navbar-dark shadow-5-strong" style={{ backgroundColor: primaryColor }}>
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Bootstrap Portfolio</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 p-3 px-5">
                <li className="nav-item">
                  <a className="nav-link text-light px-3" href="/work">WORK</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light px-3" href="#skills">SKILLS</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light px-3" href="#about-contact-me">ABOUT ME</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light px-3" href="#about-contact-me">CONTACT ME</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light px-3" target="blank" href="https://www.linkedin.com/in/michael-friel-b44b8799/">RESUME</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

    </>
  );
};

export default Navigation;
