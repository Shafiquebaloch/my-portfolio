import React from "react"
import { FaPhoneAlt,FaRegEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import "@/style/Contact.css"


const Contact = () => {
  return (
    <section id="Contact">
    <div className="contact-container">
      <div className="container">
        <div className="text-center">
          <h1>Contact</h1>
          <div className="border"></div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between">
            <div className="space-y-6 mb-8 lg:mb-0">
                <div className="flex items-center space-x-4">
                <FaPhoneAlt className="text-2xl"/>
                    <div>
                        <p>+92 3173198864</p>
                        <p>+92 3332421790</p>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <FaRegEnvelope className="text-2xl"/>
                    <p>muhammadraheem4739733@gmail.com</p>
                </div>
                <div className="flex items-center space-x-4">
                <FaLocationDot className="text-2xl"/>
                    <p>Pakistan Sindh,Sanghar</p>
                </div>
            </div>

          
          <div className="contact-form">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
            <div className="form-row">
              <input type="text" placeholder="Phone Number" />
              <input type="text" placeholder="Subject" />
            </div>
            <textarea placeholder="Your Message"></textarea>
            <button>Send</button>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default Contact