import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import TechSkills from '../components/TechSkills';
import Header from '../components/Header';

import happyTailsImg from '../assets/images/HappyTailsImg.png';
import illustrateImg from '../assets/images/IllustrateImg.png';
import calmrApp from '../assets/images/calmrApp.png';
import tictactoe from '../assets/images/tictactoe.png';

import LogoNodejs from 'react-ionicons/lib/LogoNodejs'


const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead" alt="snowcovered mountains with white reflection">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h2 className="d-flex flex-row text-white-50 mx-auto mb-5">
            Hi, I'm
          </h2>
          <h1 className="mx-auto my-0 text-uppercase">{config.heading}</h1>
          <h2 className="text-white-50 mx-auto mt-2 mb-5">
            {config.subHeading}
          </h2>
          <Scroll type="id" element="about">
            <a href="#about" className="btn btn-primary">
              About
            </a>
          </Scroll>
        </div>
      </div>
    </header>

    <section id="about" className="about-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-black mb-4">About Me</h2>
            <p className="text-black-50">
              Seeking a role as a software engineer at a company where I can grow and master the art of software engineering alongside a team of awesome, supportive individuals.
              <p>
                <h5>In my free time you'll find me</h5>
              <i className="fas fa-table-tennis fa-2x p-1"></i>
              <i className="fas fa-hiking fa-2x p-1 ml-2"></i>
              <i className="fas fa-mountain fa-2x p-1"></i>
              <i className="fas fa-birthday-cake m1-2 fa-2x p-1"></i>

              </p>
            </p>
          </div>
        </div>
        <img src="" className="img-fluid" alt="" />
      </div>
    </section>

    <section id="projects" className="projects-section bg-light">
      <div className="container">
        <div className="row align-items-center no-gutters mb-4 mb-lg-5">
          <div className="col-xl-8 col-lg-7">
            <img className="img-fluid mb-3 mb-lg-0" src={happyTailsImg} alt="" />
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="featured-text text-center text-lg-left">
              <a href="http://happy-tails.surge.sh/#/" target="_blank"><h4>Happy Tails</h4></a>
              <a href="https://github.com/brittanylcrocker/Dog-Park-Search" target="_blank"><i className="fab fa-github fa-2x"></i></a>
              <h6>React, Express, Javascript, Jquery, Node</h6>
              <p className="text-black-50 mb-0">
              Find dog parks near you by entering a location into the provided auto complete search bar to filter a list of 20 dog-friendly parks near the entered location. Locations appear as clickable markers on the map. Click on the markers to display details about the park, park name, address and rating. Click Zoom out to reset zoom to your original search results.
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6">
            <img className="img-fluid" src={illustrateImg} alt="" />
          </div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <a href="https://obscure-harbor-04994.herokuapp.com/articles" target="_blank"><h4 className="text-white">Illustrate</h4></a>
                  <a href="https://github.com/brittanylcrocker/Blogger-App" target="_blank"><i className="fab fa-github fa-2x"></i></a>
                  <h6 className="text-white-50">Ruby on Rails, Bootstrap</h6>
                  <p className="mb-0 text-white-50">
                    A blog app that allows users to sign up, create a personal blog, comment on other users articles and follow other users to curate a personalised feed of articles posted by users you follow.
                  </p>
                  <hr className="d-none d-lg-block mb-0 ml-0" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters">
          <div className="col-lg-6">
            <img className="img-fluid" src={calmrApp} alt="" />
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <a href="http://busy-comb.surge.sh/#/"><h4 className="text-white">Calmr</h4></a>
                  <a href="https://github.com/RaengC/project2-calmr-apps" target="_blank"><i className="fab fa-github fa-2x"></i></a>
                  <h6 className="text-white-50">React, Ruby on Rails, CSS</h6>
                  <p className="mb-0 text-white-50">
                    Another example of a project with its respective
                    description. These sections work well responsively as well,
                    try this theme on a small screen!
                  </p>
                  <hr className="d-none d-lg-block mb-0 mr-0" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6">
            <img className="img-fluid" src={tictactoe} alt="" />
          </div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <a href="https://brittanylcrocker.github.io/tic-tac-toe/" target="_blank"><h4 className="text-white">Tic Tac Toe</h4></a>
                  <a href="https://github.com/brittanylcrocker/tic-tac-toe" target="_blank"><i className="fab fa-github fa-2x"></i></a>
                  <h6 className="text-white-50">Ruby on Rails, Bootstrap</h6>
                  <p className="mb-0 text-white-50">
                    fun multiplayer tic-tac-toe project featuring a scoreboard tracker and a 'make it harder' feature for those seeking a challenge
                  </p>
                  <hr className="d-none d-lg-block mb-0 ml-0" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <section id="technical" className="technical-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-black mb-4">Technical Skills</h2>
              <div id="technical"></div>
                  <TechSkills />
              </div>
          </div>
        </div>
    </section>
    <div className="signup-section">
      <SocialLinks/>
    </div>
    <Footer />
  </Layout>
);

export default IndexPage;
