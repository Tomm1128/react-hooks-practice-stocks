import React, { useEffect, useState } from "react"
import StockContainer from "./StockContainer"
import PortfolioContainer from "./PortfolioContainer"
import SearchBar from "./SearchBar"

function MainContainer() {
  const [stocks, setStocks] = useState(null)
  const [portfolio, setPortfolio] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((resp) => resp.json())
      .then((stocksResp) => setStocks(stocksResp))
  }, [])

  if (!stocks) {
    return <h1>Loading...</h1>
  }

  const removePortfolio = (removedStock) => {
    const newPortfolio = portfolio.filter((stock) => stock !== removedStock)
    setPortfolio(newPortfolio)
  }

  const updatePortfolio = (newStock) => {
    portfolio
      ? setPortfolio([...portfolio, newStock])
      : setPortfolio([newStock])
  }

  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} updatePortfolio={updatePortfolio} />
        </div>
        <div className="col-4">
          <PortfolioContainer
            portfolio={portfolio}
            removePortfolio={removePortfolio}
          />
        </div>
      </div>
    </div>
  )
}

export default MainContainer
