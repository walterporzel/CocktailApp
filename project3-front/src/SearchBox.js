import React from 'react'

const SearchBox = ({ searchfield, searchChange }) => {
 
    return (
      <div className="pa2">
      <input
        className="pa3 ba b--yellow bg-lightest-grey"
        type="search"
        placeholder="search cocktails"
        onChange={searchChange}
        />
    </div>
    )
  }


export default SearchBox;

