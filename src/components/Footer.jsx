import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
function Footer() {
  return (

    <div style={{ height: "400px", backgroundColor: "purple" }} className='d-flex justify-content-center align-items-center text-light'>
      <div className='text-center'>
        <h1>Contact Us</h1>
        <h3><MdEmail /> resumebuilder@gmail.com</h3>
        <h3><FaPhoneAlt /> 9856738210</h3>
        <h2>Connect With Us</h2>
        <div className='d-flex justify-content-center fs-4 mt-3'>
          <FaWhatsapp className='me-3' />
          <FaInstagramSquare  className='me-3' />
          <FaFacebookSquare  className='me-3' />
        </div>
        <p className='mt-3'>Designed & build with ❤️ using React</p>
      </div>
    </div>

  )
}

export default Footer