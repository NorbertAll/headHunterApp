import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

import { SearchContainer } from './styles';

interface IProps {
  searchValue: string
  handleSearchValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Search = ({ searchValue, handleSearchValueChange }: IProps) => {
  return (
    <SearchContainer>
      <SearchIcon className='icon'  sx={{ fontSize: 28 }}/>
      <input className='input' type="text" id="search-input" aria-label="Szukaj" placeholder='Szukaj' value={searchValue} onChange={handleSearchValueChange}/>
    </SearchContainer>
  )
}

export default Search