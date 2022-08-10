import React from "react"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { PaginationContainer } from "./styles"
import { DIRECTION } from "./types"

interface IProps { 
  entries: number
  page: number
  pages: number
  tabLength: number
  handleEntriesChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  handlePageChange: (direction: DIRECTION) => void
}

const Pagination = ({ entries, page, pages = 1, handleEntriesChange, handlePageChange, tabLength = 0 }: IProps) => {
  const elementsVisible = page * entries <= tabLength ? page * entries : tabLength
  return (
    <PaginationContainer>
      <div className="select-entries">
        <label htmlFor="pagination-entries-per-page-select">
          Ilość elementów
          <select name="entries" id="pagination-entries-per-page-select" value={entries} onChange={handleEntriesChange}>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
            <option value={40}>40</option>
            <option value={50}>50</option>
          </select>
        </label>
      </div>
      <div className="select-pages">
        <span className="pages-number">{elementsVisible} z {tabLength}</span>
        <div className="pages-buttons">
          <button type="button" className="change-page-button" onClick={() => handlePageChange(DIRECTION.dec)} disabled={page <= 1}>
            <ArrowBackIosNewIcon className="icon" fontSize="small" />
          </button>
          <button type="button" className="change-page-button" onClick={() => handlePageChange(DIRECTION.inc)} disabled={page >= pages}>
            <ArrowForwardIosIcon className="icon" fontSize="small" />
          </button>
        </div>
      </div>
    </PaginationContainer>
  )
}

export default Pagination