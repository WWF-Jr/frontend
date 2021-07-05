import React from 'react';

export default class Navbar extends React.Component{
	render(){
		return(
			<nav>
				<a href="/" id="homelink">
					<img src="/Favicon.png" alt="" height="50px" />&nbsp;<span>WWF Jr.</span>
				</a>

				<div className="buttonbar inactive" id="buttonbar">
					<a className="toggle" onClick={toggleMenu}>
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
						<path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"></path>
						</svg>
					</a>
					<a href="/#" className="item" onClick={toggleMenu}>
						<p>About</p>
					</a>
					<a href="/#team" className="item" onClick={toggleMenu}>
						<p>Team</p>
					</a>
					<a href="/#app" className="item" onClick={toggleMenu}>
						<p>App</p>
					</a>
					<a href="/#contact" className="item" onClick={toggleMenu}>
						<p>Contact</p>
					</a>
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