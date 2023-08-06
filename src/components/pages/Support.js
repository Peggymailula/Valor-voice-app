import React from "react";
import volunteers from '../assets/volunteers.png';
import call from '../assets/call.png';
import chat from '../assets/chatroom.png';
import counsel from '../assets/counsel.png';
import './Support.css';

const Support = () => {
    return (
        <section id="services" className="services">
            <div className="container" data-aos="fade-up">
                <div className="section-header">
                    <h2>Our Services</h2>
                </div>

                <div className="container flex-container" >
                    {/* Volunteering */}
                    <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
                        <div className="service-item">
                            <div className="img">
                                <img src={volunteers} className="img-fluid smaller-img" alt="" />
                            </div>
                            <div className="details position-relative" style={{ marginBottom: "80px" }}>
                                <div className="icon">
                                    <i className="bi bi-activity"></i>
                                </div>
                                <h3 style={{ backgroundColor: "#ffff", color: "purple" }}>Volunteering</h3>
                                <p style={{ backgroundColor: "#ffff", color: "purple" }}>Join our volunteering program and make a positive impact on the community. Your contributions can bring about meaningful change and create a better world for everyone.</p>
                            </div>
                        </div>
                    </div>

                    {/* Callback */}
                    <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
                        <div className="service-item" style={{ marginTop: "80px" }}>
                            <div className="img">
                                <img src={call} className="img-fluid smaller-img" alt="" />
                            </div>
                            <div className="details position-relative" >
                                <div className="icon">
                                    <i className="bi bi-broadcast"></i>
                                </div>
                                <h3 style={{ backgroundColor: "#ffff", color: "purple" }}>Callback</h3>
                                <p style={{ backgroundColor: "#ffff", color: "purple" }}>Need someone to talk to? Our callback service provides a supportive environment for you to share your thoughts and feelings. We're here to lend an empathetic ear.</p>
                            </div>
                        </div>
                    </div>

                    {/* Chat Group */}
                    <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="400">
                        <div className="service-item" style={{ marginBottom: "80px" }}>
                            <div className="img">
                                <img src={chat} className="img-fluid smaller-img" alt="" />
                            </div>
                            <div className="details position-relative">
                                <div className="icon">
                                    <i className="bi bi-easel"></i>
                                </div>
                                <h3 style={{ backgroundColor: "#ffff", color: "purple" }}>Chat Group</h3>
                                <p style={{ backgroundColor: "#ffff", color: "purple" }}>Join our chat group to connect with like-minded individuals. Share experiences, seek advice, and find a community that understands and supports you.</p>
                            </div>
                        </div>
                    </div>

                    {/* Counselling */}
                    <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="500">
                        <div className="service-item" style={{ marginTop: "80px" }}>
                            <div className="img">
                                <img src={counsel} className="img-fluid smaller-img" alt="" />
                            </div>
                            <div className="details position-relative" >
                                <div className="icon">
                                    {/* Add appropriate icon here */}
                                    <i className="bi bi-person"></i>
                                </div>
                                <h3 style={{ backgroundColor: "#ffff", color: "purple" }}>Counselling</h3>
                                <p style={{ backgroundColor: "#ffff", color: "purple" }}>Professional counseling services are available for individuals seeking guidance and support. Our trained counselors are here to help you navigate through life's challenges.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Support;
