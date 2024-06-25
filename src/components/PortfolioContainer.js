import React from "react"
import Stock from "./Stock"

function PortfolioContainer({ portfolio, removePortfolio }) {
  const portfolioCards = portfolio.map((stock) => {
    return (
      <Stock key={stock.id} stock={stock} handlePortfolio={removePortfolio} />
    )
  })

  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolioCards}
    </div>
  )
}

export default PortfolioContainer
