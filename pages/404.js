import React from "react";

export default class NotFound extends React.Component{
	render(){
		return (
			<div className="container">
				<h1 className="title">
					We don't think we remember this page.
				</h1>
				<h2 className="subtitle">
					<a href="/">Visit the home page</a>
				</h2>
			</div>
		)
	}
}