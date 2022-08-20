import React from 'react';
import { Link } from 'react-router-dom';
import image from '../Image/VBCF_Logo2.png';
import './header.css';
// import Button from 'react-bootstrap/Button';

export default function Header() {
    return (
        <>
            <section>
                <div className="main-logo">
                    <div className="container">
                        <div className="v_logo">
                            <img src={image} className="rounded mx-auto d-block" alt="" />
                            <h1 className="text-center bold-text " style={{ margin: "auto" }}>Victorian Bangladeshi Community Foundation <br />
                                VBCF </h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className='navbar'>
                <div class="container">
                    <nav class="navbar navbar-expand-lg navbar-light ">
                        <div class="container-fluid">
                    
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div class="navbar-nav">
                                <div className="collapse navbar-collapse" id="navbarText">
                                        <ul className="navbar-nav mr-auto">
                                            <li className="nav-item active">
                                                <Link to={"/"} className="nav-link" href="#" style={{ color: "aliceblue" }}>Home</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to={"/Program"} className="nav-link" href="#" style={{ color: "aliceblue" }}>Program</Link>
                                                {/* <a className="nav-link" href="#" style={{ color: "aliceblue" }}>Program </a> */}
                                            </li>
                                            <li className="nav-item">
                                                <Link to={"/what_we_do"} className="nav-link" href="#" style={{ color: "aliceblue" }}>What We Do</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to={"/about"} className="nav-link" href="#" style={{ color: "aliceblue" }}>About</Link>
                                            </li>
                                            <li id='hasSub' className="nav-item">
                                                <Link to={"/meettheteam"} className="nav-link" href="#" style={{ color: "aliceblue" }}>Meet The Team</Link>
                                                <ul className='subNav'>
                                                    <li>
                                                        <Link to={"/meettheteam"} className="nav-link" href="#" style={{ color: "aliceblue" }}>VBCF EC 2022-23</Link>
                                                        <Link to={"/"} className="nav-link" href="#" style={{ color: "aliceblue" }}>VBCF EC 2020-21</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#" style={{ color: "aliceblue" }}>Download </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </section>



            <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>

            <script
                src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
                crossorigin></script>

            <script
                src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
                crossorigin></script>

            <script>var Alert = ReactBootstrap.Alert;</script>
        </>
    );
}

