import React from 'react'
import Helmet from 'react-helmet'
import BannerLanding from '../components/BannerLanding'
import logo from '../assets/images/icon.jpg'
import Layout from '../components/layout'

import { StaticQuery, graphql } from 'gatsby'

const pageTitle = 'About'

export default () => (
  <StaticQuery
    query={graphql`
      query AboutQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <Helmet>
          <title>{pageTitle} | {data.site.siteMetadata.title}</title>
          <meta name="description" content={`${pageTitle} | ${data.site.siteMetadata.title}`} />
          <meta property="og:title" content={`${pageTitle} | ${data.site.siteMetadata.title}`} />
          <meta property="og:description" content={`${pageTitle} | ${data.site.siteMetadata.title}`} />
        </Helmet>

        <BannerLanding
          title="About"
          descriptionTop="My Profile, Experience, Skills"
          descriptionBottom=""
          type="1"
        />

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
                    I'm a Frontend Developer based in Tokyo. I develop
                    WebApplications and WebSites.
                    <br />I am good at designing HTML / CSS, markup and developing
                    with JavaScript.
                    <br />
                    Recently I have developed with React, Vue.js and Polymer.
                  </p>
                  <p className="about-profileText">
                    I like Fonts, Road Bike, Table Tennis, Anime.
                  </p>
                  <p className="about-profileText">
                    I also accept accept a job offer as Solo proprietorship. Please
                    feel free to{' '}
                    <a
                      href="https://twitter.com/takanoripe"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      contact me
                    </a>
                    .
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
              <ul className="about-experience">
                <li className="about-experienceItem">
                  <p className="about-experiencePeriod">
                    <i className="icon alt fa-building-o" />
                    Oct. 2018 – Now
                  </p>
                  <div className="box about-experienceBox">
                    <h3 className="about-experienceTitle">
                      <a
                        href="https://corp.folio-sec.com/"
                        target="_blank" rel="noopener noreferrer"
                      >
                        FOLIO Inc.
                      </a>
                    </h3>
                    <p className="about-experienceText">Frontend Engineer</p>
                  </div>
                </li>
                <li className="about-experienceItem">
                  <p className="about-experiencePeriod">
                    <i className="icon alt fa-building-o" />
                    Jun. 2017 – Sep. 2018
                  </p>
                  <div className="box about-experienceBox">
                    <h3 className="about-experienceTitle">
                      <a
                        href="https://smartdrive.co.jp/"
                        target="_blank" rel="noopener noreferrer"
                      >
                        SmartDrive Inc.
                      </a>
                    </h3>
                    <p className="about-experienceText">Frontend Engineer</p>
                  </div>
                </li>
                <li className="about-experienceItem">
                  <p className="about-experiencePeriod">
                    <i className="icon alt fa-building-o" />
                    May 2016 – Jun. 2017
                  </p>
                  <div className="box about-experienceBox">
                    <h3 className="about-experienceTitle">
                      <a href="https://4dd.jp/" target="_blank" rel="noopener noreferrer">
                        FOURDIGIT DESIGN Inc.
                      </a>
                    </h3>
                    <p className="about-experienceText">Frontend Engineer</p>
                  </div>
                </li>
                <li className="about-experienceItem">
                  <p className="about-experiencePeriod">
                    <i className="icon alt fa-building-o" />
                    Feb. 2015 – Feb. 2016
                  </p>
                  <div className="box about-experienceBox">
                    <h3 className="about-experienceTitle">
                      Web Production Company
                    </h3>
                    <p className="about-experienceText">
                      Web Director and HTML Coder
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          <section id="three">
            <div className="inner">
              <header className="major">
                <h2>Skills</h2>
              </header>
              <p className="about-skills">
                <span>Vue.js</span>
                <span>Nuxt.js</span>
                <span>React</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>Stylus</span>
                <span>Sass(Scss)</span>
                <span>JavaScript</span>
                <span>jQuery</span>
                <span>ES2016</span>
                <span>Gulp</span>
                <span>Webpack</span>
                <span>Node.js</span>
                <span>WordPress</span>
                <span>UI Design</span>
              </p>
            </div>
          </section>
        </div>
      </Layout>
    )}
  />
)
