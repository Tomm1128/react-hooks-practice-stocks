import React from "react"
import Stock from "./Stock"

function StockContainer({ stocks, updatePortfolio }) {
  const stockCards = stocks.map((stock) => {
    return (
      <Stock key={stock.id} stock={stock} handlePortfolio={updatePortfolio} />
    )
  })
  return (
    <div>
      <h2>Stocks</h2>
      {stockCards}
    </div>
  )
}

export default StockContainer
