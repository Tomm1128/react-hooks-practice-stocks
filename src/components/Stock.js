import React from "react"

function Stock({ stock: { id, ticker, name, price, type } }) {
  return (
    <div>
      <div className="card">
        <div className="card-body" id={id} name={type}>
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker + ": " + price}</p>
        </div>
      </div>
    </div>
  )
}
export default Stock
