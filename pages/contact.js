import React from 'react';
import Head from "next/head";


export default class Contact extends React.Component{
	query;
	static getInitialProps({query}) {
		return {query}
	}
	constructor(props){
		super(props)
		this.query = props.query
	}
	render(){
		if (this.query == undefined || this.query == {}){
			return main()
		} else if(this.query.success == "true"){
			return success()
		}else if (this.query.success == "false"){
			return failure()
		}else{
			return main()
		}
	}
}


const success = () => {
	return (
		<section className="main" style={{width:"100%"}}>
			<Head>
				<meta httpEquiv="refresh" content="5;URL='/'" />    
			</Head>
			<h1 className="title">
				Operation Success!
			</h1>
			<strong>You will soon be redirected to the home page...</strong>
		</section>
	)
}

const failure = () => {
	return (
		<section className="main" style={{width:"100%"}}>
			<Head>
				<meta httpEquiv="refresh" content="5;URL='/contact'" />    
			</Head>
			<h1 className="title error">
				An Unexpected error occured. Please try again...
			</h1>
		</section>
	)
}

const main = () => {
	return (
		<section className="main" style={{width:"100%"}}>
			<h2 id="contact" className="subtitle">
				Contact
			</h2>
			<div className="contactform">
				<form action="/api/contact" method="POST">
					<div className="side-by-side">
						<input type="text" name="name" placeholder="Your Name" required/>
						<input type="email" name="email" placeholder="Your Email" required/>
					</div>
					<textarea name="message" id="" cols="30" rows="10" placeholder="Your message" required></textarea>
					<input type="submit" className="theme-small"/>
				</form>
			</div>
		</section>
	)
}