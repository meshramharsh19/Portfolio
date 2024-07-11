import React from 'react';

export default function Navbar() {
    return (
        <div className="sticky-top">
            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{background:"#d9d9cd"}}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><img src="logo192.png" alt="" /></a>
                    {/* <a className="navbar-brand" href="/" style={{color:"blue"}}><h2>HARSH</h2></a> */}
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        {/* <div className="navbar-nav">
                            <Link className="nav-link" to="home" smooth={true} duration={500}>Home</Link>
                            <Link className="nav-link" to="skills" smooth={true} duration={500}>Skills</Link>
                            <Link className="nav-link" to="projects" smooth={true} duration={500}>Projects</Link>
                            <Link className="nav-link" to="contact" smooth={true} duration={500}>Contact</Link>
                        </div> */}
                    </div>
                    <div className="d-flex ms-auto">
                        <a className="btn btn-primary" href="https://drive.google.com/file/d/1MVe3ZDXf2cogcTD8q33QL4xlyonQTGfT/view?usp=sharing/" rel="noreferrer" target="_blank">Resume</a>
                    </div>
                </div>
            </nav>
        </div>
    );
}
