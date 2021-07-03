import React from "react"
import Head from "next/head"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

// Import all styles
import "../styles/Team.css"
import '../styles/Home.css'
import '../styles/Navbar.css'
import '../styles/Footer.css'
import '../styles/app-page.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <Head>
        <title>WWF Jr</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </React.StrictMode>
  )
}

export default MyApp
