/* eslint-disable */

import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import styled from 'styled-components'

import aboutHeader from '../assets/images/header-image-1-sepia.jpg'
import rpi from '../assets/images/rpi.jpg'
import siteDiagram from '../assets/images/decentralized-publishing-model.jpeg'
import Memo from '../services/memo-hash'

// The BCH address broadcasting IPFS hashes when updates are made, using the
// memo.cash protocol.
const ADDR = `bitcoincash:qppngav5s88devt4ypv3vhgj643q06tctcx8fnzewp`
const memo = new Memo({ bchAddr: ADDR })

const StyldLi = styled.li`
  padding: 10px;
`

let _this

class About extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      ipfsHash: 'IPFS not found',
      ipfsHashLink: '/about',
      msg: 'test message',
    }

    _this = this
  }

  async componentDidMount() {
    try {
      const hash = await memo.findHash()

      if (!hash) {
        console.error(
          `Could not find IPFS hash in transactions for address ${ADDR}`
        )
        return
      }
      console.log(`latest IPFS hash: ${hash}`)

      this.setState({
        ipfsHash: hash,
        ipfsHashLink: `https://ipfs.io/ipfs/${hash}`,
      })
    } catch (err) {
      console.error(err)
    }
  }

  render() {
    return (
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
                    capable of serving the website directly, the secret is that
                    it broadcasts the content over the{' '}
                    <a href="https://ipfs.io" target="_blank">
                      Inter-Planetary File System (IPFS)
                    </a>{' '}
                    network. That content is downloaded and rebroadcast by
                    several other servers around the internet. Anyone who
                    downloads that content also helps broadcast the IPFS
                    content. The Raspberry Pi (RPi), is just a backup as a last
                    resort, in case no other systems on the internet have the
                    content.
                  </p>
                  <p>
                    Copies of this site can be accessed in several different
                    ways:
                  </p>
                  <ul>
                    <StyldLi>
                      Conveniently at a normal url:{' '}
                      <a href="http://troutsblog.com">troutsblog.com</a>
                    </StyldLi>
                    <StyldLi>
                      Tor hidden service:{' '}
                      <a href="http://2noppt2w3u6t4mbd6sjtxyabfwuyyuw6osgap7anl3scarc3oamgbiqd.onion/">
                        http://2noppt2w3u6t4mbd6sjtxyabfwuyyuw6osgap7anl3scarc3oamgbiqd.onion/
                      </a>
                    </StyldLi>
                    <StyldLi>
                      <Link to={_this.state.ipfsHashLink}>{_this.state.ipfsHash}</Link>
                    </StyldLi>
                    <StyldLi>
                      Click the IPFS links in{' '}
                      <a
                        href="https://memo.cash/profile/178M7njZV8qHNTwczgfu4f4fGik4tqrSR4"
                        target="_blank"
                      >
                        this Memo.cash feed
                      </a>
                      .
                    </StyldLi>
                  </ul>
                </div>
                <div className="col-5">
                  <img src={rpi} alt="" style={{ width: '100%' }} />
                </div>
              </div>

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

              <h2>How it Works</h2>
              <p>
                Content on the IPFS network is linked by its hash. A hash looks
                like this:
                <br />
                <code>QmNuGu4moPdCu3Rrnia77k3wDS2v4jLxmyiE68N7fGEDv5</code>
                <br />
                The cryptography behind these hashes ensures that any random
                person can provide a copy of the conent, and you can be sure it
                hasn't been tampered with. But the downside is that any time a
                piece of content (like this website) is updated, the hash must
                also change, and that change must be broadcast to the people who
                want to access the content.
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
                (BCH) to syndicate updates. The uncensorable nature of the BCH
                blockchain ensures that updates to the site can not be blocked,
                and links to past and present conent can not be lost.
              </p>

              <p>
                This new, permissionless, censorship-resistant form of
                publishing makes use of a few tools that I created:
              </p>
              <ul>
                <StyldLi>
                  <a
                    href="https://github.com/Permissionless-Software-Foundation/ipfs-web-server"
                    target="_blank"
                  >
                    ipfs-web-server
                  </a>{' '}
                  is the 'back end' web server running on the Raspberry Pi
                  pictured above. It serves the content in a conventional way,
                  but also syndicates it over the IPFS and Tor networks.
                </StyldLi>
                <StyldLi>
                  <a
                    href="https://github.com/christroutner/gatsby-ipfs-boilerplate"
                    target="_blank"
                  >
                    gatsby-ipfs-boilerplate
                  </a>{' '}
                  is the 'front end' website template used to create this site.
                  You can fork it to create your own website. It includes all
                  the prerequisits for syndicating your site over the IPFS
                  network.
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
                  protocol. It's important to note that Memo.cash is just a
                  site. The data can be accessed{' '}
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
                    href="https://github.com/christroutner/ipfs-stay-connected"
                    target="_blank"
                  >
                    ipfs-stay-connected
                  </a>{' '}
                  (optional) Will connect your local IPFS node to an array of
                  other IPFS nodes, and will renew the connection every couple
                  minutes to ensure nodes stay connected. It's very useful when
                  uploading and syndicating data over the IPFS network.
                </StyldLi>
              </ul>

              <br />

              <br />
              <h2>Decentralized Publishing Model</h2>
              <p>
                Below is a model illustrating the different ways this website
                can be accessed over the internet.
              </p>
              <ol>
                <StyldLi>
                  The website is updated on a <b>Dev Box</b>. Updated content is
                  uploaded to the IPFS network and the new link is published to
                  the BCH blockchain.
                </StyldLi>
                <StyldLi>
                  The <b>Raspberry Pi</b> periodically checks the BCH network
                  for updates published to a specific address. If an update is
                  detected, the updates are downloaded from the IPFS network.
                </StyldLi>
                <StyldLi>
                  The Rasberry Pi then serves the content over the{' '}
                  <b>clearnet</b> and Tor <b>darkweb</b>. It also begins pinging
                  IPFS public gateways so that other servers begin downloading
                  and syndicating the IPFS content.
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

              <img src={siteDiagram} alt="" style={{ width: '100%' }} />
              <br />
              <br />

              <h2>How You Can Help</h2>
              <p>
                You can help distribute this site and any other content on IPFS
                by running your own node and pinning the content. This allows
                your node to download and share the content with anyone else in
                the network.
              </p>
              <ul>
                <StyldLi>
                  Install{' '}
                  <a
                    href="https://docs.ipfs.io/introduction/install/"
                    target="_blank"
                  >
                    IPFS
                  </a>{' '}
                  on your own computer.
                </StyldLi>
                <StyldLi>
                  Get the latest IPFS hash of this blog from{' '}
                  <a
                    href="https://memo.cash/profile/178M7njZV8qHNTwczgfu4f4fGik4tqrSR4"
                    target="_blank"
                  >
                    this memo.cash feed
                  </a>
                  .
                </StyldLi>
                <StyldLi>
                  Run <code>ipfs pin add -r hash</code> to download and share
                  the content. Replace 'hash' with the hash at the top of the
                  memo.cash feed.
                </StyldLi>
              </ul>
              <p>
                You are now doing your part to fight censorship on the internet!
              </p>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default About
