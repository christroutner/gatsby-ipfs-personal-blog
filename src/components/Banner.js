/* eslint-disable */

import React from 'react'
import { Link } from 'gatsby'

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
                <h1>Uncensorable Content</h1>
            </header>
            <div className="content">
                <p>
                  This site is syndicated
                  over <a href="https://ipfs.io" target="_blank">IPFS</a> and
                  updates are broadcast
                  over <a href="https://memo.cash/profile/178M7njZV8qHNTwczgfu4f4fGik4tqrSR4" target="_blank">
                  the Bitcoin Cash blockchain</a>. <br />
                  No government on earth is capable of censoring this website.
                </p>
                <ul className="actions">
                    <li><Link to="/about" className="button next scrolly">Build Your Own</Link></li>
                </ul>
            </div>
        </div>
    </section>
)

export default Banner
