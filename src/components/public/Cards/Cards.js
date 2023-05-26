import React from 'react'
import { Link } from 'react-router-dom';
import style from "./Card.module.scss";

const Cards = ({results}) => {

  let display;
  if(results){
    display =  results.map( x => {
      let { id, name, location, image, status } = x;
      return ( 
        <Link to={`/${id}`} key={id} className="col-lg-4 col-md-6 col-12 mb-4" style={{ textDecoration: "none"}}>
        <div  className= {`${style.carta} card`}>
        <img src={image} className={`${style.img} card-img-top`} alt={name}/>
        <div className="card-body text-start text-dark">
          <h5 className=" marker text-center card-title fs-3">{name}</h5>
          <p className="fs-6">Status: <span className="fs-5">{status}</span></p>
          <span className="fs-6">Last Location:</span>
          <p className="fs-5 card-text">{location.name}</p>
        </div>
      </div>
      </Link>      
      )
    });
  }
  else {
    display = "No Character Found";
  }

  return (
    <>{display}</>
  )
};

export default Cards