/* eslint-disable */

import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import styled from 'styled-components'

import aboutHeader from '../assets/images/header-image-1-sepia.jpg'
import rpi from '../assets/images/rpi.jpg'
import siteDiagram from '../assets/images/decentralized-publishing-model.jpeg'

const StyldLi = styled.li`
  padding: 10px;
`

const Generic = props => (
  <Layout>
    <Helmet>
      <title>About - Trout's Blog</title>
      <meta name="description" content="About" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>About</h1>
          </header>
          <span className="image main">
            <img src={aboutHeader} alt="" />
          </span>

          <div className="grid-wrapper">
            <div className="col-7">
              <p>
                This website is maintained on the internet by this{' '}
                <a href="https://amzn.to/2H3wtSL" target="_blank">
                  Raspberry Pi
                </a>
                , a $50 credit-card-sized minicomputer. While the device is
                capable of serving the website directly, the secret is that it
                broadcasts the content over the{' '}
                <a href="https://ipfs.io" target="_blank">
                  Inter-Planetary File System (IPFS)
                </a>{' '}
                network. That content is downloaded and rebroadcast by several
                other servers around the interent. Anyone who downloads that
                content also helps broadcast the IPFS content. The Raspberry Pi
                (RPi), is just a backup as a last resort, in case no other
                systems on the internet have the content.
              </p>
              <p>
                Copies of this site can be accessed in several different ways:
              </p>
              <ul>
                <StyldLi>
                  Conveniently at a normal url:{' '}
                  <a href="http://troutsblog.com">troutsblog.com</a>
                </StyldLi>
                <StyldLi>
                  Directly:{' '}
                  <a href="http://decatur.hopto.org:4102">
                    decatur.hopto.org:4102
                  </a>
                </StyldLi>
                <StyldLi>
                  Tor hidden service:{' '}
                  <a href="http://k2h7xxqcjzwsdj64.onion/">
                    http://k2h7xxqcjzwsdj64.onion/
                  </a>
                </StyldLi>
                <StyldLi>
                  Click the IPFS links
                  in <a href="https://memo.cash/profile/178M7njZV8qHNTwczgfu4f4fGik4tqrSR4"
                  target="_blank">this Memo.cash feed</a>.
                </StyldLi>
              </ul>
            </div>
            <div className="col-5">
              <img src={rpi} alt="" style={{ width: '100%' }} />
            </div>
          </div>

          <h2>How it Works</h2>
          <p>
            Content on the IPFS network is linked by its hash. A hash looks like
            this:
            <br />
            <code>QmNuGu4moPdCu3Rrnia77k3wDS2v4jLxmyiE68N7fGEDv5</code>
            <br />
            The cryptography behind these hashes ensures that any random person
            can provide a copy of the conent, and you can be sure it hasn't been
            tampered with. But the downside is that any time a piece of content
            (like this website) is updated, the hash must also change, and that
            change must be broadcast to the people who want to access the
            content.
          </p>
          <p>
            IPFS has a general solution to this problem called{' '}
            <a
              href="https://docs.ipfs.io/guides/concepts/ipns/"
              target="_blank"
            >
              IPNS
            </a>
            , which can be very slow. Instead, this site uses the{' '}
            <a href="https://bitcoin.com" target="_blank">
              Bitcoin Cash Blockchain
            </a>{' '}
            (BCH) to syndicate updates. The uncensorable nature
            of the BCH blockchain ensures that updates to the site can not be
            blocked, and links to past and present conent can not be lost.
          </p>

          <p>
            This new, permissionless, censorship-resistant form of publishing
            makes use of a few tools that I created:
            <ul>
              <StyldLi>
                <a
                  href="https://github.com/christroutner/koa-ipfs-blog"
                  target="_blank"
                >
                  koa-ipfs-blog
                </a>{' '}
                is the web server running on the Raspberry Pi pictured above (
                <a
                  href="https://github.com/christroutner/koa-ipfs-blog-rpi"
                  target="blank"
                >
                  Here is a version for the Raspberry Pi
                </a>
                ). It serves the content in a conventional way, but also
                syndicates it over the IPFS and Tor networks.
              </StyldLi>
              <StyldLi>
                <a
                  href="https://github.com/christroutner/memo-push"
                  target="_blank"
                >
                  memo-push
                </a>{' '}
                is a tool used to publish the IPFS link on the Bitcoin Cash
                blockchain, using the{' '}
                <a
                  href="https://memo.cash/profile/178M7njZV8qHNTwczgfu4f4fGik4tqrSR4"
                  target="_blank"
                >
                  Memo.cash
                </a>{' '}
                protocol. It's important to note that Memo.cash is just a site.
                The data can be accessed{' '}
                <a
                  href="https://explorer.bitcoin.com/bch/tx/5b90d71c4c230ee419cecbceacd1165690e117d28a8441110e1df57023e13da0"
                  target="_blank"
                >
                  directly off the BCH blockchain
                </a>
                .
              </StyldLi>
              <StyldLi>
                <a
                  href="https://github.com/christroutner/ipfs-cacher"
                  target="_blank"
                >
                  IPFS Cacher
                </a>{' '}
                finds the latest link published to the BCH blockchain the
                requests the IPFS content from a list of public IPFS gateways
                once per hour. This ensure that the gateways have the latest
                website updates on-hand and can provide the content to the
                network too.
              </StyldLi>
            </ul>
          </p>

          <br />
          <h2>Videos - Learn More</h2>
          <ul>
            <StyldLi>
              <a
                href="https://www.youtube.com/watch?v=RlNVyatwd5M"
                target="_blank"
              >
                Here is a non-technical video overview
              </a>{' '}
              of how governments censor content on the internet, and how
              decentralized publishing tools can be used to circumvent it.
            </StyldLi>
            <StyldLi>
              <a
                href="https://www.youtube.com/watch?v=Ez9YXpu_Chs"
                target="_blank"
              >
                Here is a walkthrough video
              </a>{' '}
              of how to use the tools discussed above, to publish your own
              website in a decentralized, censorship-resistant way.
            </StyldLi>
          </ul>
          <br />

          <br />
          <h2>Decentralized Publishing Model</h2>
          <p>
            Below is a model illustrating the different ways this website can be
            accessed over the internet.
            <ol>
              <StyldLi>
                The website is updated on a <b>Dev Box</b>. Updated content is
                uploaded to the IPFS network and the new link is published to
                the BCH blockchain.
              </StyldLi>
              <StyldLi>
                The <b>Raspberry Pi</b> periodically checks the BCH network for
                updates published to a specific address. If an update is
                detected, the updates are downloaded from the IPFS network.
              </StyldLi>
              <StyldLi>
                The Rasberry Pi then serves the content over the <b>clearnet</b>{' '}
                and Tor <b>darkweb</b>. It also begins pinging IPFS public
                gateways so that other servers begin downloading and syndicating
                the IPFS content.
              </StyldLi>
              <StyldLi>
                <b>Mirror servers</b>, <b>Random IPFS users</b>, and{' '}
                <b>distributed web apps (dapps)</b> can independently and
                permissionlessly check the BCH address and syndicate the IPFS
                data too. This all taps into the{' '}
                <a
                  href="https://en.wikipedia.org/wiki/Streisand_effect"
                  target="_blank"
                >
                  Streisand Effect
                </a>
                , causing content to be easier to syndicate if an
                authority-in-power tries to censor it.
              </StyldLi>
            </ol>
          </p>

          <img src={siteDiagram} alt="" style={{ width: '100%' }} />
        </div>
      </section>
    </div>
  </Layout>
)

export default Generic
