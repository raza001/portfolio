import "./portfolioList.scss"

export default function PortfolioList({ title, active, setSelected, id }) {
	return (
		<div className={active ? "portfoliolist active" : "portfoliolist"} onClick={() => setSelected(id)}>
			{title}

		</div>
	)
}
