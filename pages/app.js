import React from "react";
import Link from "next/link"

export default class AboutApp extends React.Component{
	render(){
		return (
			<div className="container" style={{padding:"0 30px"}}>
				<main>
					<h1 className="title">The App</h1>
					<p className="desc">
						This App is an interactive and fun way to get information about some of the rarest of the rare species of animals and plants, and you can also bring these animals and plants to life within seconds using our AR features. This app also tells you how some of our fellow humans are harming these creatures and what should be done to support them. You also get to know some cool fun-facts about these organisms which would never fail to amaze you.
					</p>
					<h1 className="subtitle" style={{textAlign:"left"}}>
						Features
					</h1>
					<ul className="desc" style={{textAlign:"left"}}>
						<li>Know about endangered species from all over the world.</li>
						<li>Get a 3D representation and a lot of information of the species you want.</li>
						<li>Bring that representation to the real world.</li>
						<li>Know about some amazing mind-boggling facts related to wildlife.</li>
						<li>Get all of this from 1 single place on any device you like.</li>
					</ul>
					<h1 className="subtitle" style={{marginTop:"50px"}}>Get the App</h1>
					<p className="desc" style={{textAlign:"center"}}>
						This app can run on your favourite browser, and for that, you need to go <Link href="/app/run">Here</Link>.
					</p>
				</main>
			</div>
		)
	}
}