import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
//import BITBOXSDK from 'bitbox-sdk'
import Memo from '../assets/js/memo.js'

import pic11 from '../assets/images/pic11.jpg'

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
    }
  }

  async componentDidMount() {
    try {
      console.log(`Hello world!`)

      //const price = await BITBOX.Price.current('usd')
      //console.log(`price: ${price}`)

      _this.hash = await memo.findHash()
      if (!_this.hash) {
        console.error(
          `Could not find IPFS hash in transactions for address ${ADDR}`
        )
      }
    } catch (err) {
      console.error(err)
    }
  }

  render() {
    return (
      <Layout>
        <Helmet>
          <title>Generic - Forty by HTML5 UP</title>
          <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
          <section id="one">
            <div className="inner">
              <header className="major">
                <h1>Generic</h1>
              </header>
              <span className="image main">
                <img src={pic11} alt="" />
              </span>
              <p>
                Donec eget ex magna. Interdum et malesuada fames ac ante ipsum
                primis in faucibus. Pellentesque venenatis dolor imperdiet dolor
                mattis sagittis. Praesent rutrum sem diam, vitae egestas enim
                auctor sit amet. Pellentesque leo mauris, consectetur id ipsum
                sit amet, fergiat. Pellentesque in mi eu massa lacinia malesuada
                et a elit. Donec urna ex, lacinia in purus ac, pretium pulvinar
                mauris. Curabitur sapien risus, commodo eget turpis at,
                elementum convallis elit. Pellentesque enim turpis, hendrerit.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Etiam
                tristique libero eu nibh porttitor fermentum. Nullam venenatis
                erat id vehicula viverra. Nunc ultrices eros ut ultricies
                condimentum. Mauris risus lacus, blandit sit amet venenatis non,
                bibendum vitae dolor. Nunc lorem mauris, fringilla in aliquam
                at, euismod in lectus. Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac turpis egestas. In non
                lorem sit amet elit placerat maximus. Pellentesque aliquam
                maximus risus, vel sed vehicula.
              </p>
              <p>
                Interdum et malesuada fames ac ante ipsum primis in faucibus.
                Pellentesque venenatis dolor imperdiet dolor mattis sagittis.
                Praesent rutrum sem diam, vitae egestas enim auctor sit amet.
                Pellentesque leo mauris, consectetur id ipsum sit amet,
                fersapien risus, commodo eget turpis at, elementum convallis
                elit. Pellentesque enim turpis, hendrerit tristique lorem ipsum
                dolor.
              </p>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Latest
