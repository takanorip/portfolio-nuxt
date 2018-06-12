import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import BannerLanding from '../components/BannerLanding'

import logo from '../assets/images/icon.jpg'

const About = (props) => (
  <div>
    <Helmet>
      <title>About | Takanori Oki</title>
      <meta name="description" content="About | Takanori Oki" />
    </Helmet>

    <BannerLanding title="About" descriptionTop="My Profile, Experience, Skills" descriptionBottom="" type="1" />

    <div id="main" className="">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>Profile</h2>
          </header>
          <div className="about-profile">
            <div className="about-profileImg">
              <img src={logo} alt="" />
            </div>
            <div className="about-profileTexts">
              <p className="about-profileText">
                I'm a Frontend Developer based in Tokyo. I develop WebApplications and WebSites.<br />
                I am good at designing HTML / CSS, markup and developing with JavaScript.<br />
                Recently I have developed with React, Vue.js and Polymer.
              </p>
              <p className="about-profileText">
                I also accept accept a job offer as Solo proprietorship. Please feel free to <a href="https://twitter.com/takanoripe" target="_blank" rel="noopener">contact me</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="two">
        <div className="inner">
          <header className="major">
            <h2>Experience</h2>
          </header>
          <dl>
            <dt>SmartDrive Inc.</dt>
            <dd>
              <p>June 2017 – Now / Frontend Engineer</p>
            </dd>
            <dt>FOURDIGIT DESIGN Inc.</dt>
            <dd>
              <p>May 2016 – June 2017 / Frontend Engineer</p>
            </dd>
            <dt>Web Production Company</dt>
            <dd>February 2015 – February 2016 / Web Director and HTML Coder</dd>
          </dl>
        </div>
      </section>
      <section id="three">
        <div className="inner">
          <header className="major">
            <h2>Skills</h2>
          </header>
          <p className="about-skills">
            <b>Vue.js</b>
            <b>Nuxt.js</b>
            <b>React</b>
            <b>HTML</b>
            <b>CSS</b>
            <b>Stylus</b>
            <b>Sass(Scss)</b>
            <b>JavaScript</b>
            <b>jQuery</b>
            <b>ES2016</b>
            <b>Gulp</b>
            <b>Webpack</b>
            <b>Node.js</b>
            <b>WordPress</b>
            <b>UI Design</b>
          </p>
        </div>
      </section>
    </div>

  </div>
)

export default About
