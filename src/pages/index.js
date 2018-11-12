import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <h1>Hi people Mono</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.Now?</p>
    <div style={{ maxWidth: '400px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
