import Team from "./team"
import Contact from "./contact"
import Link from "next/link"

export default function Home() {
  return (
    <div className="container">

      <main className="grid-2">
        <div>
          <img src="/Logo.png" alt="" style={{width:"70vmin", borderRadius: "10px"}}/>
        </div>
        <div>
          <h1 className="subtitle">About Us</h1>
          <p className="desc">
          We are a team of young students from India and Canada who wish to spread awareness about nature and the human activities that harm it. We aim to educate younger generations through an interactive knowledgebase by using 3D technology and the web to show a diverse range of animal and plant species, and how our actions affect the environment, all across the Earth.
          </p>
        </div>
      </main>
      
      <Team />

      <main style={{padding:"30px"}}>
        <h1 className="subtitle" id="app">The App</h1>
        <p className="desc">
          This App is an interactive and fun way to get information about some of the rarest of the rare species of animals and plants, and you can also bring these animals and plants to life within seconds using our AR features. This app also tells you how some of our fellow humans are harming these creatures and what should be done to support them. You also get to know some cool fun-facts about these organisms which would never fail to amaze you. To know more about this App's features, go <Link href="/app">here</Link>.
        </p>
      </main>

      <Contact />
    </div>
  )
}
