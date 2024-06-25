import React, { useEffect, useState } from "react"
import StockContainer from "./StockContainer"
import PortfolioContainer from "./PortfolioContainer"
import SearchBar from "./SearchBar"

function MainContainer() {
  const [stocks, setStocks] = useState(null)
  const [portfolio, setPortfolio] = useState([])
  const [sort, setSort] = useState("none")
  const [filter, setFilter] = useState("All")

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

  const sortedStocks = stocks.toSorted((stockA, stockB) => {
    if (sort === "Alphabetically") {
      return stockA.name.localeCompare(stockB.name)
    } else if (sort === "Price") {
      return stockA.price - stockB.price
    } else {
      return false
    }
  })

  const filteredSortedStocks = sortedStocks.filter((stock) =>
    filter === "All" ? true : stock.type === filter
  )

  return (
    <div>
      <SearchBar setSort={setSort} setFilter={setFilter} />
      <div className="row">
        <div className="col-8">
          <StockContainer
            stocks={filteredSortedStocks}
            updatePortfolio={updatePortfolio}
          />
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
