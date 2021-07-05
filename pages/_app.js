import React from "react"
import Head from "next/head"
import {useRouter} from "next/router"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

// Import all styles
import "../styles/Team.css"
import '../styles/Home.css'
import '../styles/Navbar.css'
import '../styles/Footer.css'
import '../styles/contact.css'
import '../styles/globals.css'


let excludes = ["/app/run"]
excludes.includes()

function MyApp({ Component, pageProps }) {
  let router = useRouter()
  return (
    <React.StrictMode>
      <Head>
        <title>WWF Jr</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      {!excludes.includes(router.pathname) && <Navbar />}
      <Component {...pageProps} />
      {!excludes.includes(router.pathname) &&  <Footer />}
    </React.StrictMode>
  )
}

export default MyApp
