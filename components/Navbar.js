import React from 'react';
import Link from "next/link"

export default class Navbar extends React.Component{
	render(){
		return(
			<nav>
				<Link href="/">
					<span id="homelink"><img src="/Favicon.png" alt="" height="50px" />&nbsp;<span>WWF Jr.</span></span>
				</Link>

				<div className="buttonbar inactive" id="buttonbar">
					<a className="toggle" onClick={toggleMenu}>
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
						<path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"></path>
						</svg>
					</a>
					<Link href="/#about">
						<p className="item" onClick={toggleMenu}>About</p>
					</Link>
					<Link href="/team">
						<p className="item" onClick={toggleMenu}>Team</p>
					</Link>
					<Link href="/app">
						<p className="item" onClick={toggleMenu}>App</p>
					</Link>
					<Link href="/contact">
						<p className="item" onClick={toggleMenu}>Contact</p>
					</Link>
				</div>
			</nav>
		)
	}
}

function toggleMenu(){
	let menu = document.getElementById("buttonbar");
	menu.classList.replace(
		menu.classList.contains("inactive") ? "inactive":"active",
		menu.classList.contains("inactive") ? "active":"inactive"
	)
}