import axios from "axios";
import React from "react";
import styles from "../../styles/App.module.css"

export default class App extends React.Component{
	render(){
		return (
			<div className={styles.app}>
			</div>
		)
	}
}


export const getServerSideProps = async (ctx) => {
	let continents = {} //(await new axios(`${ctx.protocol}://wwf-jr.herokuapp.com/fetch_cont`, {})).data

	return {
	  props: {
		  regions: continents
	  }
	}
  }