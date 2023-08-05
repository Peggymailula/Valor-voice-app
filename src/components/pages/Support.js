import React from "react"
import volunteers from '../assets/volunteers.png'
import call from '../assets/call.png'
import chat from '../assets/chatroom.png'
import counsel from '../assets/counsel.png'
import './Support.css';



const Support = () => {
    return (
        <section id="services" class="services">
            <div class="container" data-aos="fade-up">

                <div class="section-header">
                    <h2>Our Services</h2>

                </div>

                <div class="row gy-5">

                    <div class="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
                        <div class="service-item">
                            <div class="img">
                                <img src={volunteers} class="img-fluid" alt="" />
                            </div>
                            <div class="details position-relative">
                                <div class="icon">
                                    <i class="bi bi-activity"></i>
                                </div>
                                <h3>Volunteering</h3>
                                <p>Join our volunteering program and make a positive impact on the community. Your contributions can bring about meaningful change and create a better world for everyone.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
                        <div class="service-item">
                            <div class="img">
                                <img src={call} class="img-fluid" alt="" />
                            </div>
                            <div class="details position-relative">
                                <div class="icon">
                                    <i class="bi bi-broadcast"></i>
                                </div>

                                <h3>Callback</h3>
                                <p>Need someone to talk to? Our callback service provides a supportive environment for you to share your thoughts and feelings. We're here to lend an empathetic ear.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="400">
                        <div class="service-item">
                            <div class="img">
                                <img src={chat} class="img-fluid" alt="" />
                            </div>
                            <div class="details position-relative">
                                <div class="icon">
                                    <i class="bi bi-easel"></i>
                                </div>
                                <h3>Chat Group</h3>
                                <p>Join our chat group to connect with like-minded individuals. Share experiences, seek advice, and find a community that understands and supports you.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="500">
                        <div class="service-item">
                            <div class="img">
                                <img src={counsel} class="img-fluid" alt="" />
                            </div>
                            <div class="details position-relative">
                                <div class="icon">

                                </div>
                                <h3>Counselling</h3>
                                <p>Professional counseling services are available for individuals seeking guidance and support. Our trained counselors are here to help you navigate through life's challenges.</p>

                            </div>
                        </div>
                    </div>

                    {/* <div class="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="600">
                    <div class="service-item">
                        <div class="img">
                            <img src="../assets/volunteers.png" class="img-fluid" alt="" />
                        </div>
                        <div class="details position-relative">
                            <div class="icon">

                            </div>
                            <a href="#" class="stretched-link">
                                <h3>Velit Doloremque</h3>
                            </a>
                            <p>Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.</p>
                            <a href="#" class="stretched-link"></a>
                        </div>
                    </div>
                </div> */}

                    {/* <div class="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="700">
                    <div class="service-item">
                        <div class="img">
                            <img src="assets/img/services-6.jpg" class="img-fluid" alt="" />
                        </div>
                        <div class="details position-relative">
                            <div class="icon">
                                <i class="bi bi-chat-square-text"></i>
                            </div>
                            <a href="#" class="stretched-link">
                                <h3>Dolori Architecto</h3>
                            </a>
                            <p>Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.</p>
                            <a href="#" class="stretched-link"></a>
                        </div>
                    </div>
                </div> */}

                </div>

            </div>
        </section>
    )
}
export default Support