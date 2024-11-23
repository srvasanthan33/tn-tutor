
import ButtonGradient from './assets/svg/ButtonGradient'
import Button from './components/Button'
import ButtonSvg from "./assets/svg/ButtonSvg"
import Header from './components/Header'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Roadmap from './components/Roadmap'
import Footer from './components/Footer'

function App() {

	return (
		<>
			<div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
				<Header/>
				<Hero/>
				{/* <Benefits/> */}
				<Roadmap/>
				{/*<Benefits/>*/}
				<Footer/>
			</div>
			<ButtonGradient />
		</>
	)
}

export default App
