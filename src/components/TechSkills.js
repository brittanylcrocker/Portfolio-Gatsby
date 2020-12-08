import React from "react";
import jscriptImg from '../assets/images/techImg/icons8-javascript-144.png';
import reactImg from '../assets/images/techImg/icons8-react-native-144.png';
import vueImg from '../assets/images/techImg/icons8-vue-js-144.png';
import rubyImg from '../assets/images/techImg/icons8-ruby-programming-language-144.png';
import cssImg from '../assets/images/techImg/icons8-css3-144.png';
import rorImg from '../assets/images/techImg/rubyonrails.png';
import nodeImg from '../assets/images/techImg/nodejs.png';
import expressImg from '../assets/images/techImg/expressjs.png';
import mongoDB from '../assets/images/techImg/mongodb.png';
import jqueryImg from '../assets/images/techImg/jquery.png';
import sqlImg from '../assets/images/techImg/icons8-sql-100.png';
import postgresqlImg from '../assets/images/techImg/icons8-postgresql-144.png';
import graphqlImg from '../assets/images/techImg/icons8-graphql-144.png';



const TechSkills = () => {
  let techImg = {
    frontEndImg: [jscriptImg, reactImg, vueImg, cssImg],
    backendImg: [rubyImg, rorImg, sqlImg],
    largeImg: [nodeImg, expressImg, jqueryImg, mongoDB]
  }

  return (
    <div className='container'>
    <div className='row'>
    {techImg.frontEndImg.map((i) => {
      return (<div className="col"><img className="img-thumbnail border-0" style={{height: 72 + "px", width: 72 + 'px' }} src={i} id="img"/></div>)
    })
  }
  </div>
    <div className='row'>
    {techImg.backendImg.map((i) => {
      return (<div className="col"><img className="img-thumbnail border-0" style={{height: 72 + "px", width: 72 + 'px' }} src={i} id="img"/></div>)
    })
  }
  </div>
    <div className='row'>
    {techImg.largeImg.map((i) => {
      return (<div className="col"><img className="img-thumbnail border-0" src={i} id="img"/></div>)
    })
  }
  </div>
  </div>
  )
}
export default TechSkills
