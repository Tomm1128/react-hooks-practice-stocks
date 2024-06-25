import React from "react"

function Stock({ stock, handlePortfolio }) {
  const { id, ticker, name, price, type } = stock
  const handleClick = () => {
    handlePortfolio(stock)
  }
  return (
    <div>
      <div className="card">
        <div className="card-body" id={id} name={type} onClick={handleClick}>
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker + ": " + price}</p>
        </div>
      </div>
    </div>
  )
}
export default Stock
