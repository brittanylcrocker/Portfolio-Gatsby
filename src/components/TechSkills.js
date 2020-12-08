import React from "react";
import jscriptImg from '../assets/images/icons8-javascript-144.png';
import reactImg from '../assets/images/icons8-react-native-144.png';
import vueImg from '../assets/images/icons8-vue-js-144.png';
import rubyImg from '../assets/images/icons8-ruby-programming-language-144.png';
import cssImg from '../assets/images/icons8-css3-144.png';
import rorImg from '../assets/images/rubyonrails.png';


const TechSkills = () => {
  let techImg = [jscriptImg, reactImg, vueImg, cssImg, rubyImg, rorImg]
  return (
    <div className='row'>
    {techImg.map((i) => {
      return (<div className="col"><img src={i} id="img"/></div>)
    })
  }
  </div>
  )
}
export default TechSkills
