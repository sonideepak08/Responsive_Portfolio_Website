import React from 'react'
import SocialContact from '../../common/social-contact'
import "./about.css"
function About() {
    return (
        <div className="about">
            <div className="about-top">
                <div className="about-info">
                    Hello There , This is&nbsp;
                    <span className="info-name">Deepak Kumar Soni</span>.
                    <br /> I am pursuing pursued B.Tech(2019-2023) in Computer Science<br /> from ABES Engineering College, Ghaziabad. <br />I love Development and am exploring it.
                </div>
                <div className="about-photo">
                    <img
                        src={require("../../../assets/portfolio_img.jpeg")}
                        className="picture"
                    />
                </div>
            </div>
            <SocialContact />
        </div>
    )
}

export default About