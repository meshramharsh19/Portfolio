import React from 'react';
import { Link } from 'react-scroll';

export default function Navbar() {
    return (
        <div className="sticky-top">
            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{background:"#d9d9cd"}}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/" style={{color:"blue"}}><h2>Portfolio</h2></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link" to="home" smooth={true} duration={500}>Home</Link>
                            <Link className="nav-link" to="skills" smooth={true} duration={500}>Skills</Link>
                            <Link className="nav-link" to="projects" smooth={true} duration={500}>Projects</Link>
                            <Link className="nav-link" to="contact" smooth={true} duration={500}>Contact</Link>
                        </div>
                    </div>
                    <div>
                        <a href="https://drive.google.com/file/d/1MVe3ZDXf2cogcTD8q33QL4xlyonQTGfT/view?usp=sharing/" target="_blank" rel="noopener noreferrer">
                            <button type="button" className="btn btn-outline-primary">My Resume</button>
                        </a>
                    </div>
                </div>
            </nav>
                   
        </div>
    )
}
