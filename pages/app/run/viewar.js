import React from "react"

export default class GoTo3D extends React.Component {
	query;
	constructor(props){
		super(props)
		console.log(props)
	}
	render(){
		return (<div></div>)
	}
	componentDidMount(){
		document.location.assign(document.location.href.replace("wwf-jr.netlify.app/app/run/view3d", "wwf-3d.netlify.app")+"&error=AR+Models+are+currently+not+supported")
	}
}