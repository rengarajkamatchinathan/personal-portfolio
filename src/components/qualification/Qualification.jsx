import React from "react";
import "./qualification.css";
import { HiOutlineBriefcase, HiOutlineCalendar } from "react-icons/hi";

const Qualification = () => {
    return (
        <section className="qualification section">
            <h2 className="section__title">Experience</h2>
            <span className="section__subtitle">My Journey</span>

            <div className="qualification__container container">
                {/* <div className="qualification__tabs">
                    <div className="qualification__button button--flex qualification__active">
                        <HiOutlineBriefcase className="qualification__icon" />
                        Experience
                    </div>
                </div> */}

                <div className="qualification__sections">
                    <div className="qualification__content qualification__content-active">
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Intern</h3>
                                <span className="qualification__subtitle">Tmachine Software Solutions</span>
                                <div className="qualification__calendar">
                                    <HiOutlineCalendar className="qualification__calendar-icon" />
                                    Jan 2024 - May 2024
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Intern</h3>
                                <span className="qualification__subtitle">Marcello Tech</span>
                                <div className="qualification__calendar">
                                    <HiOutlineCalendar className="qualification__calendar-icon" />
                                    Jan 2023 - Feb 2023
                                </div>
                            </div>
                        </div>
                        {/* <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">UX Designer</h3>
                                <span className="qualification__subtitle">Apple Inc</span>
                                <div className="qualification__calendar">
                                    <HiOutlineCalendar className="qualification__calendar-icon" />
                                    2016-2022
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div> */}
                        {/* <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Senior Developer</h3>
                                <span className="qualification__subtitle">Freelance - Remote</span>
                                <div className="qualification__calendar">
                                    <HiOutlineCalendar className="qualification__calendar-icon" />
                                    2019-Present
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section> 
    );
}

export default Qualification;
