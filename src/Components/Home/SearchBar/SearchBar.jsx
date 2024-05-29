import React from 'react'
import './style.css';

const SearchBar = ({ value,handleSearchKey,clearSearch,formSubmit }) => (
 
    <div className='searchBar-wrap'>
      <form onSubmit={formSubmit}>

        <input 
        type="text" 
        placeholder='Search By Category'
         value={value} 
         onChange={handleSearchKey} 
         />

        {value && <span onClick={clearSearch}>X</span> }

<button>Go</button>

      </form>
    </div>
  );
 
export default SearchBar
