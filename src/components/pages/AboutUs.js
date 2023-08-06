import React from 'react';
import "./About.css"
import apiwe from '../assets/apiwe.png'
import chulu from '../assets/chulu.png'
import peggy from '../assets/peggy.png'
import zethu from '../assets/zethu.png'

const AboutUs = () => {
    return (
        <>
            <div className="row">
                <div className="col-lg-3 col-md-6 d-flex align-items-stretch aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                    <div className="member">
                        <div className="member-img">
                            <img src={zethu} className="img-fluid" alt="" />
                            <div className="social">
                                <a href=""><i className="bi bi-twitter"></i></a>
                                <a href=""><i className="bi bi-facebook"></i></a>
                                <a href=""><i className="bi bi-instagram"></i></a>
                                <a href=""><i className="bi bi-linkedin"></i></a>
                            </div>
                        </div>
                        <div className="member-info">
                            <h4>Zezethu Mhauli</h4>
                            <span>GirlCodeHackathon</span>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 d-flex align-items-stretch aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                    <div className="member">
                        <div className="member-img">
                            <img src={chulu} className="img-fluid" alt="" />
                            <div className="social">
                                <a href=""><i className="bi bi-twitter"></i></a>
                                <a href=""><i className="bi bi-facebook"></i></a>
                                <a href=""><i className="bi bi-instagram"></i></a>
                                <a href=""><i className="bi bi-linkedin"></i></a>
                            </div>
                        </div>
                        <div className="member-info">
                            <h4>Chulumanco Nkwindana</h4>
                            <span>GirlCodeHackathon</span>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 d-flex align-items-stretch aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
                    <div className="member">
                        <div className="member-img">
                            <img src={peggy} className="img-fluid" alt="" />
                            <div className="social">
                                <a href=""><i className="bi bi-twitter"></i></a>
                                <a href=""><i className="bi bi-facebook"></i></a>
                                <a href=""><i className="bi bi-instagram"></i></a>
                                <a href=""><i className="bi bi-linkedin"></i></a>
                            </div>
                        </div>
                        <div className="member-info">
                            <h4>Peggy Mailula</h4>
                            <span>GirlCodeHackathon</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 d-flex align-items-stretch aos-init aos-animate" data-aos="fade-up" data-aos-delay="500">
                    <div className="member">
                        <div className="member-img">
                            <img src={apiwe} className="img-fluid" alt="" />
                            <div className="social">
                                <a href=""><i className="bi bi-twitter"></i></a>
                                <a href=""><i className="bi bi-facebook"></i></a>
                                <a href=""><i className="bi bi-instagram"></i></a>
                                <a href=""><i className="bi bi-linkedin"></i></a>
                            </div>
                        </div>
                        <div className="member-info">
                            <h4>Apiwe Macingwane</h4>
                            <span>GirlCodeHackathon</span>
                        </div>
                    </div>
                </div>
            </div>

            <footer>
                <p>&copy; 2023 My Blog. All rights reserved.</p>
            </footer>
        </>
    );
};

export default AboutUs;
