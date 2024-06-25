import React from "react"

function SearchBar({ setSort, setFilter }) {
  const updateSortType = (event) => {
    setSort(event.target.value)
  }

  const updateFilter = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          onChange={updateSortType}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          onChange={updateSortType}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={updateFilter}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  )
}

export default SearchBar
