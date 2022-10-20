import React from 'react'
import Separator from '../../common/separator'
import SocialContact from '../../common/social-contact'
import "./contact.css"
function Contact() {
  return (
    <div className="contact">
      <Separator />
      <label className="section-title">Contact</label>
      <div className="contact-container">
        <div className="contact-left">
          <p>To get in touch, Contact me on any of the platform</p>
          <SocialContact />
        </div>
        <div className="download">
          <a download href={require("../../../assets/DeepakKumarSoni_Resume.pdf")}>
          <i class="fa-solid fa-cloud-arrow-down"></i>
            Download Resume
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact