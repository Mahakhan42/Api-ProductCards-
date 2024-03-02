import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Footer } from "../Components/Footer";

function ShowDetails (){
    const navigate = useNavigate();
    const {id} = useParams();
    const [singleProduct,setSingleProduct]=useState("");
    console.log(id);

    const logoutHandle = () => {
        alert('User Logged Out...');
        navigate('/login');
    };

    useEffect(() => {
        const fetchSingleData = async () => {
            try {
                const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
                setSingleProduct(res.data);
            } catch (error) {
                console.log(error);
            }
        };
    
        fetchSingleData();
    
    }, [id]);
    return(<>
      <div className="d-flex justify-content-between align-items-center" style={{body:'#fff',background:'rgb(44, 44, 90)' ,color:'#fff',padding:'15px',width:'100%',boxShadow:' 0 7px 5px -5px #333'}}>
                <h2><b>Welcome To Home Page</b></h2>
                <button onClick={logoutHandle} className='btn btn-danger'>Logout</button>
            </div>
            <br /><br /><br />
      <br /><br />
      <center><h1><b><i>________Product Details________</i></b></h1></center><br /><br />
        <div className="container d-flex" style={{backgroundColor:'white',color:'#000' ,border:'4px solid rgb(44, 44, 90) ',padding:'50px',borderRadius:'10px',boxShadow:'0 7px 5px -5px #333'}}>
            <div className="row">
                <div className="col-md-6">
                <h1><b>{singleProduct.title}</b></h1><br />
                <p>{singleProduct.description}</p>
                <br />
                <button className="btn" style={{background:' rgb(44, 44, 90)',color:'#fff',padding:'13px 80px',boxShadow:'0 7px 5px -5px #333'}} onClick={()=>{navigate('/Home')}}>Back</button>
                </div>
                <div className="col-md-6 ">
                <img width={'300px'} src={singleProduct.image} alt="" />
                </div>
                <br /><br />     <br /><br />
            </div>
        </div>
        <br /><br />     <br /><br />
        <Footer/>
        </>
    )
}
export { ShowDetails}