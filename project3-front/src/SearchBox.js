import React from 'react'

const SearchBox = ({ searchfield, searchChange }) => {
 
    return (
      <div className="input">
      <input
        className="pa2 ba b--yellow bg-lightest-grey"
        type="search"
        placeholder="search cocktails"
        onChange={searchChange}
        />
    </div>
    )
  }


export default SearchBox;

