import React from 'react';

import './search-box.style.css';

export const SearchBox  = ({placeholders,handleChange}) => (
	<input
	className = "search"
	type="search"
	placeholder={placeholders}
	onChange={handleChange}
  />
);
