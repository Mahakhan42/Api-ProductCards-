import React from 'react';
import { useNavigate } from 'react-router-dom';

const CardRender = ({ title, image, desc, id }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="container">
        <div className="row d-flex">
          <div className="col">
            <img src={image} width='50%' alt="" />
            <br /><br />
            <h4>{title}</h4>
            <p>{desc}</p>
            <button className='btn'  style={{background:' rgb(44, 44, 90)',color:'#fff',padding:'6px 10px',boxShadow:'0 7px 5px -5px #333'}} onClick={()=>{navigate(`/ShowDetails/${id}`)}}>Show Details</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { CardRender };
