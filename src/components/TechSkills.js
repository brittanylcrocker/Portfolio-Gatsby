import React from "react";

import rorImg from '../assets/images/techImg/rubyonrails.png';
import nodeImg from '../assets/images/techImg/nodejs.png';
import expressImg from '../assets/images/techImg/expressjs.png';
import jqueryImg from '../assets/images/techImg/jquery.png';
import sqlImg from '../assets/images/techImg/icons8-sql-100.png';
import postgresqlImg from '../assets/images/techImg/icons8-postgresql-144.png';
import graphqlImg from '../assets/images/techImg/icons8-graphql-144.png';



const TechSkills = () => {
  let techImg = {
    frontEndImg: ['js', 'react', 'vuejs', 'node'],
    backendImg: ['fas fa-gem', 'fab fa-html5', 'fab fa-css3-alt', 'fas fa-database'],
    database: [ 'database']
  }

  return (
    <div className='container'>
    <div className='row mb-1 d-flex justify-content-center'>
    {techImg.frontEndImg.map((i) => {
      return (<i  className={`fab fa-${i} fa-5x`}></i>)
    })
  }
  </div>
    <div className='row d-flex justify-content-center'>
    {techImg.backendImg.map((i) => {
      return (<i  className={`${i} fa-5x p-2`}></i>)
    })
  }
  </div>

  </div>
  )
}
export default TechSkills
