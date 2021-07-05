import axios from "axios";
import App from "../../components/App"
export default App

export const getServerSideProps = async (ctx) => {
	let regionsreq = await new axios(`https://wwf-jr.herokuapp.com/fetch_cont`, {})
	if(regionsreq.data.success){
		let regionsRaw = regionsreq.data.conts
		let regions = []
		regionsRaw.forEach(element => {
			regions.push(element.replace("-", " "))
		});
		return {
			props: {
				regions: regions
			}
		}
	}else{
		return {
			props: {
				regions: []
			}
		}
	}
}