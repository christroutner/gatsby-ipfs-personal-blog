/* eslint-disable */

import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Collapsible from '../components/MyCollapsible'
import styled from 'styled-components'

import pic11 from '../assets/images/research-header.jpg'

const StyledCollapsible = styled.div`
  background-color: #8482c426;
  padding: 15px;
`

const faqTitles = []
const faqContent = []

// Bitcoin Cash
faqTitles.push('Bitcoin Cash (BCH)')
faqContent.push(() => {
  return (
    <div>
      <ul>
        <li>
          <a href="/research/bitcoin-cash/curated-links">Currated Links</a>
        </li>

        <li>
          <a href="/research/bitcoin-cash/blockbook">Blockbook</a>
        </li>

        <li>
          <a href="/research/bitcore-node-insight-api">
            Bitcore Node and Insight API
          </a>
        </li>
      </ul>
    </div>
  )
})

// IPFS
faqTitles.push('IPFS')
faqContent.push(() => {
  return (
    <div>
      <ul>
        <li>
          <a href="/research/ipfs/installing-ipfs">Installing IPFS</a>
        </li>

        <li>
          <a href="/research/ipfs/ipfs-curated-links">Currated Links</a>
        </li>

        <li>
          <a href="/research/ipfs/favorite-ipfs-content">
            Favorite IPFS contnet
          </a>
        </li>
      </ul>
    </div>
  )
})

// Tor
faqTitles.push('TOR - The Onion Router')
faqContent.push(() => {
  return (
    <div>
      <ul>
        <li>
          <a href="/research/tor/tor-curated-links">Tor Currated Links</a>
        </li>

        <li>
          <a href="/research/tor/tails">Tails Operating System</a>
        </li>

        <li>
          <a href="/research/tor/email">Email in Tor</a>
        </li>
      </ul>
    </div>
  )
})

faqTitles.push('Raspberry Pi Minicomputer')
faqContent.push(() => {
  return (
    <div>
      <ul>
        <li>
          <a href="/research/raspberry-pi/overview">Raspberry Pi Overview</a>
        </li>

        <li>
          <a href="/research/raspberry-pi/initial-configuration">
            Initial Configuration
          </a>
        </li>

        <li>
          <a href="/research/raspberry-pi/docker-firewall">Docker Firewall</a>
        </li>

        <li>
          <a href="/research/raspberry-pi/bandwidth-control">
            Bandwidth Control
          </a>
        </li>
      </ul>
    </div>
  )
})

faqTitles.push('JavaScript')
faqContent.push(() => {
  return (
    <div>
      <ul>
        <li>
          <a href="/research/javascript/js-curated-links">
            JavaScript Currated Links
          </a>
        </li>
      </ul>
    </div>
  )
})

faqTitles.push('Dev Ops')
faqContent.push(() => {
  return (
    <div>
      <ul>
        <li>
          <a href="/research/dev-ops/overview">Dev Ops Overview</a>
        </li>
      </ul>
    </div>
  )
})

const renderFaqs = () => {
  return faqTitles.map((title, index) => {
    const trigger1 = `⊳ ${title}`
    const trigger2 = `↴ ${title}`

    return (
      <StyledCollapsible key={title}>
        <Collapsible
          key={title}
          trigger={trigger1}
          triggerWhenOpen={trigger2}
          triggerTagName="h3"
          triggerStyle={{ margin: 0 }}
        >
          {faqContent[index]()}
        </Collapsible>
      </StyledCollapsible>
    )
  })
}

const Research = props => {
  return (
    <Layout>
      <Helmet>
        <title>Research</title>
        <meta name="description" content="Generic Page" />
      </Helmet>

      <div id="main" className="alt">
        <section id="one">
          <div className="inner">
            <header className="major">
              <h1>Research</h1>
            </header>
            <span className="image main">
              <img src={pic11} alt="" />
            </span>

            <div className="grid-wrapper">
              <div className="col-12">
                <p>
                  This page contains a list of links to research articles.
                  Unlike blog posts, research articles are listed by the parent
                  topic and not the date.
                </p>
                <p>
                  Click on a research topic to activate the drop-down list of
                  articles under that topic. The link list appears to the left
                  on desktop browsers and at the top of the page for mobile
                  browsers.
                </p>
              </div>
            </div>

            <div className="grid-wrapper">
              <div className="col-12">{renderFaqs()}</div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Research
