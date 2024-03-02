import React, { useState } from 'react';
import { Input_Field } from '../Components/Input_Field';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { app } from '../Config/Firebase';
import { GoogleAuthProvider } from "firebase/auth"; 

const Login = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({});
    const [error, setError] = useState(null); // State to hold error message

    const Change_Handle = (e) => {
      const { value, id } = e.target;
      setData({ ...data, [id]: value });
    }
    
    const LoginHandle = () => {
      const Googleprovider = new GoogleAuthProvider();
      const auth = getAuth(app);
      signInWithPopup(auth, Googleprovider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          console.log(user);
          setData({});
          navigate('/Home');
        }).catch((error) => {
          // Handle Errors here.
          const errorMessage = error.message;
          setError(errorMessage); // Set error message
        });
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const auth = getAuth(app);
      signInWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
          setData({});
          navigate('/Home');
        })
        .catch((error) => {
          const errorMessage = error.message;
          setError(errorMessage); // Set error message
        });
    }

    return (
        <div>
            <br />
            <center>
                <div className="container" style={{backgroundColor:'#FFFFFF',boxShadow:'0 7px 5px -5px #333',maxWidth:'400px',height:'600px',marginTop:'30px',border:'2px solid rgb(44, 44, 90)',borderRadius:'10px'}}>
                    <br /><h2><b>Login</b></h2>
                    <br />
                    {error && <div className="alert alert-danger" role="alert">{error}</div>} {/* Display error message if exists */}
                    <form onSubmit={handleSubmit}>
                        <Input_Field id='email' type='email' onChange={Change_Handle} required={true} placeholder='Enter your Email...' /><br />
                        <Input_Field id='password' type='password' onChange={Change_Handle} required={true} placeholder='Enter your Password...' /><br />
                        <br />
                        <button type='submit' className='btn'style={{background:' rgb(44, 44, 90)',color:'#fff',padding:'13px 80px',boxShadow:'0 7px 5px -5px #333'}}> <b>Login</b></button>
                    </form>
                    <br /><br />
                    Don't have an account? <Link to='/'>Signup</Link>
                    <br /><br />
                    <span>_________or_________</span>
                    <br /><br />
                    <button className='btn1' style={{background:' rgb(44, 44, 90)',color:'#fff',padding:'13px 50px',boxShadow:'0 7px 5px -5px #333',border:'none',borderRadius:'5px'}} onClick={LoginHandle}><FaGoogle />&nbsp; <b>Login with Google</b></button>
                </div>
                <br /><br />
            </center>
        </div>
    );
}

export {Login};
