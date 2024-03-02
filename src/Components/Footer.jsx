import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaGithub ,FaFacebookF ,FaLinkedinIn} from "react-icons/fa";
const Footer = () => {
  return (
    <div  style={{background:'rgb(44, 44, 90)' ,color:'#fff',padding:'15px',width:'100%',boxShadow:' 0 7px 5px -5px #333'}}>
    
      <center>
        <br /><br />
        <div className="icons">
            <h3><b>Assignment No: 18</b></h3><br />
            <p>Crud Operation File System Node Js</p>
            <br />
        <FaTwitter size={'25px'} />&nbsp;&nbsp;&nbsp;&nbsp;
        <FaGithub size={'25px'} />&nbsp;&nbsp;&nbsp;&nbsp;
        <FaFacebookF size={'25px'} />&nbsp;&nbsp;&nbsp;&nbsp;
        <FaLinkedinIn size={'25px'}  />&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <br />
      <hr />
      Copyright©2024.webApp
      </center>
    </div>
  )
}

export { Footer}
