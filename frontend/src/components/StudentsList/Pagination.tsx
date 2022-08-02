import React from "react"

import { PaginationContainer } from "./styles"
import { DIRECTION } from "./types"

interface IProps { 
  entries: number
  page: number
  pages: number
  handleEntriesChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  handlePageChange: (direction: DIRECTION) => void
}

const Pagination = ({ entries, page, pages = 1, handleEntriesChange, handlePageChange }: IProps) => {
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
        <span>{page} z {pages}</span>
        <div>
          <button type="button" onClick={() => handlePageChange(DIRECTION.dec)} disabled={page <= 1}>DEC</button>
          <button type="button" onClick={() => handlePageChange(DIRECTION.inc)} disabled={page >= pages}>INC</button>
        </div>
      </div>
    </PaginationContainer>
  )
}

export default Pagination