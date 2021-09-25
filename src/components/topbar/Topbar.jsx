import "./topbar.scss"
import { Person, Mail } from "@material-ui/icons"

export default function Topbar({ menuOpen, setMenuOpen }) {
	return (
		<div className={"topbar " + (menuOpen && "active")}>
			<div className="wrapper">
				<div className="left">
					<a href="#intro" className="logo" >
						M|R</a>
					<div className="itemContainer" >
						<Person className="icon" />
						<span className="span">+916394905245</span>
					</div>
					<div className="itemContainer" >
						<Mail className="icon" />
						<span className="span">razamohd371@gmail.com</span>
					</div>
				</div>
				<div className="right">
					<div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
						<span className="list1"></span>
						<span className="list2"></span>
						<span className="list3"></span>
					</div>
				</div>

			</div>

		</div>
	)
}


