import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import BannerLanding from '../components/BannerLanding'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const About = (props) => (
  <div>
    <Helmet>
      <title>About | Takanori Oki</title>
      <meta name="description" content="About Takanori Oki" />
    </Helmet>

    <BannerLanding title="About" descriptionTop="My Profile, Experience, Skills" descriptionBottom="" />

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>Profile</h2>
          </header>
          <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna.</p>
        </div>
      </section>
      <section id="two">
        <div className="inner">
          <header className="major">
            <h2>Experience</h2>
          </header>
          <section>
            <h4>Web Production Company</h4>
            <div class="table-wrapper">
              <table class="alt">
                <tbody>
                  <tr>
                    <td>Period</td>
                    <td>February 2015 – February 2016</td>
                  </tr>
                  <tr>
                    <td>Position</td>
                    <td>Web Director / Coder</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </section>
      <section id="three">
        <div className="inner">
          <header className="major">
            <h2>Skills</h2>
          </header>
          <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna.</p>
        </div>
      </section>
    </div>

  </div>
)

export default About
