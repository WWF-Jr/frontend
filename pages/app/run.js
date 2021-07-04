import axios from "axios";
import React from "react";
import Head from "next/head"
import styles from "../../styles/App.module.css"

export default class App extends React.Component{
	regions;
	constructor(props){
		super(props)
		this.regions = props.regions
		this.state = {page:0}
	}
	render(){
		if(this.state.page<pages.length && this.state.page>=0){
			return (
				<div className={styles.app} id="app">
					{pages[this.state.page](this)}
					<div className={styles.appbar}>
						<button onClick={()=>{this.setState({page:this.state.page-1})}}>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>
						</button>
						<button onClick={()=>{this.setState({page:0})}}>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z"/></svg>
						</button>
					</div>
				</div>
			)
		}else{
			return <div className={styles.app} id="app"></div>
		}
	}
	componentDidUpdate(){
		if(this.state.page>pages.length || this.state.page<0){
			this.setState({page:0})
		}
	}
}


function page1(comp){
	let regionButtons = []
	for(let i=0;i<comp.regions.length;i++){
		regionButtons.push(<button key={i} className={styles.button} onClick={()=>{
			comp.setState({page:comp.state.page+1, region: comp.regions[i]})
		}}>{comp.regions[i]}</button>)
	}
	return (
		<section>
			<h1 className="title">Choose a continent</h1>
			<div className={styles.buttons}>
				{regionButtons}
			</div>
		</section>
	)
}

function page2(comp){
	return (
		<section>
			<h1 className="title">{comp.state.region}</h1>
		</section>
	)
}



const pages = [page1, page2]
export const getServerSideProps = async (ctx) => {
	let regions = ["Asia", "North America", "South America", "Europe", "Africa", "Australia"] //(await new axios(`${ctx.protocol}://wwf-jr.herokuapp.com/fetch_cont`, {})).data

	return {
	  props: {
		  regions: regions
	  }
	}
}