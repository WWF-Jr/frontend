import React from 'react';

export default class Team extends React.Component{
	render(){
		return(
			<section className="main">
				<h2 id="team" className="subtitle">
					Our Team
				</h2>

				<div className="grid">
					<a href="https://github.com/Nalin-2005" className="card" target="_blank">
						<img src="/team/nalin.png" alt=""/>
						<h2>Nalin</h2>
					</a>

					<a href="https://github.com/NrdyBhu1" className="card" target="_blank">
						<img src="/team/nalin.png" alt=""/>
						<h2>Bhuvan</h2>
					</a>

					<a href="https://github.com/miscae" className="card" target="_blank">
						<img src="/team/nalin.png" alt=""/>
						<h2>Cindy</h2>
					</a>
				</div>
			</section>
		)
	}
}