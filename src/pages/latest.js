import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

//import BITBOXSDK from 'bitbox-sdk'
import Memo from '../assets/js/memo.js'

// The BCH address broadcasting IPFS hashes when updates are made, using the
// memo.cash protocol.
const ADDR = `bitcoincash:qppngav5s88devt4ypv3vhgj643q06tctcx8fnzewp`

//const BITBOX = new BITBOXSDK()
const memo = new Memo(ADDR)

let _this

class Latest extends React.Component {
  constructor(props) {
    super(props)

    _this = this

    this.state = {
      hash: undefined,
      msg: 'test message',
    }
  }

  async componentDidMount() {
    try {
      //console.log(`Hello world!`)

      //const price = await BITBOX.Price.current('usd')
      //console.log(`price: ${price}`)

      _this.hash = await memo.findHash()

      if (!_this.hash) {
        console.error(
          `Could not find IPFS hash in transactions for address ${ADDR}`
        )
      }
      console.log(`latest hash: ${_this.hash}`)

      const newUrl = `https://gateway.ipfs.io/ipfs/${_this.hash}`
      console.log(`new URL: ${newUrl}`)

      //this.state.msg = `new hash: ${_this.hash}`
      //this.render()
      if (typeof window !== 'undefined') {
        window.location.href = newUrl
      }
    } catch (err) {
      console.error(err)
    }
  }

  render() {
    return (
      <Layout>
        <Helmet>
          <title>Latest</title>
          <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
          <section id="one">
            <div className="inner">
              <header className="major">
                <h1>Latest Version</h1>
              </header>

              <p>
                This page should automatically navigate you to an IPFS gateway
                within a few seconds with the latest
                version of the site. If it fails, you can find the latest IPFS
                upload by clicking the link at the top of
                this <a href="https://memo.cash/profile/178M7njZV8qHNTwczgfu4f4fGik4tqrSR4">memo.cash feed</a>.
              </p>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Latest
