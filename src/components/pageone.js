import React from 'react';
import { ReactTyped } from 'react-typed';

export default function Navbar() {
    return (
        <div>
            <div className="container pageone">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col" style={{ marginTop: "4rem" }}>
                        <h2>Hi! I'm Harsh Meshram</h2>
                        <h1>
                            <ReactTyped
                                strings={['Web Developer', 'Python Developer', 'UI/UX Designer']}
                                typeSpeed={40}
                                backSpeed={50}
                                loop
                            />
                        </h1>
                        <p style={{color:"black"}}>I am Harsh Meshram, a passionate web and Python developer studying Information Technology at JD College of Engineering and Management, Nagpur. I have practical experience from internships at Internpe and Motion Cuts (AICTE) and have developed projects like Text to Speak and TextUtils, showcasing my skills in Python, HTML, CSS, JavaScript, and Figma.</p>
                        <a href="https://www.linkedin.com/in/harsh-meshram-5b8271258/" target="_blank" rel="noopener noreferrer">
                            <button type="button" className="btn btn-primary">Let's Connect</button>
                        </a>
                    </div>

                    <div className="col image-myportfolio" >
                        <img src="/myportfolio.png" className="card-img-top" alt="bhai kyu nhi hora laod" />
                    </div>
                </div>
            </div>
        </div>
    );
}
