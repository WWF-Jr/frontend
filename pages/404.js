import React from "react";
import Link from "next/link"

export default class NotFound extends React.Component{
	render(){
		return (
			<div className="container">
				<h1 className="title">
					We don't think we remember this page.
				</h1>
				<h2 className="subtitle">
					<Link href="/">Visit the home page</Link>
				</h2>
			</div>
		)
	}
}