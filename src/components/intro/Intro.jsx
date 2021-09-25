import "./intro.scss"
import { useEffect, useRef } from "react"
import { init } from 'ityped'


export default function Intro() {

	const textRef = useRef();
	useEffect(() => {
		init(textRef.current, { showCursor: true, backDelay: 1500, backSpeed: 60, strings: ['Developer', 'Designer', 'Content writer'] })
	}, [])

	return (
		<div className="intro" id="intro">
			<div className="left">

				<div className="imagecontainer">
					<img src="assets/man.png" alt=""></img>
				</div>
			</div>
			<div className="right">

				<div className="wrapper">
					<h2>Hi There, I'm</h2>
					<h1>MOHD RAZA</h1>
					<h3>Software  <span className="ityped-cursor" ref={textRef}></span></h3>
				</div>
				<a href="#portfolio">
					<img src="assets/down.png" alt=""></img>
				</a>
			</div>
		</div>
	)
}
