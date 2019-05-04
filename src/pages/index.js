/* eslint-disable */

import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="Trout's Unstoppable Blog"
          meta={[
            { name: 'description', content: "Trout's Unstoppable Blog" },
            { name: 'keywords', content: 'IPFS, Bitcoin Cash, decentralized publishing, blog' },
          ]}
        />

        <Banner />

        <div id="main">
          <section id="one" className="tiles">
            <article style={{ backgroundImage: `url(${pic01})` }}>
              <header className="major">
                <h3>Blog</h3>
                <p>
                  I capture thoughts, current events, and transient interests
                  in the blog.
                </p>
              </header>
              <Link to="/blog" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic02})` }}>
              <header className="major">
                <h3>Research</h3>
                <p>
                  I share my ongoing research in Bitcoin Cash, IPFS,
                  Tor, and distributed publishing.
                </p>
              </header>
              <Link to="/research" className="link primary" />
            </article>
          </section>

        </div>
      </Layout>
    )
  }
}

export default HomeIndex
