import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardRender } from '../Components/CardRender';
import { Footer } from '../Components/Footer';

const Home = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    const logoutHandle = () => {
        alert('User Logged Out...');
        navigate('/login');
    };

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        axios.get("https://fakestoreapi.com/products")
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center" style={{body:'#fff',background:'rgb(44, 44, 90)' ,color:'#fff',padding:'15px',width:'100%',boxShadow:' 0 7px 5px -5px #333'}}>
                <h2><b>Welcome To Home Page</b></h2>
                <button onClick={logoutHandle} className='btn btn-danger'>Logout</button>
            </div>
            <br /><br /><br />
           <center><h1><i><b>________Products Cards________</b></i></h1></center> 
           <br /><div className="row">
                {products.map((product, index) => (
                    <div className="col-md-4 p-3 g-5" style={{border:'1px solid black',borderRadius:'10px',gap:'50px',boxShadow:' 0 7px 5px -5px #333'}} key={index}>
                        <CardRender
                            title={product.title}
                            image={product.image}
                            desc={product.description}
                            id={product.id}
                        />
                    </div>
                ))}
            </div>
            <br /><br /><br /><br />
            <Footer/>
        </div>

    );

}

export { Home };
