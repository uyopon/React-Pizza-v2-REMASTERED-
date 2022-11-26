import React from 'react'
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.css'

function Pagination({onChange}) {
  return (
    <ReactPaginate
    className={styles.root}
    breakLabel="..."
    nextLabel=">"
    onPageChange={event => onChange(event.selected+1)}
    pageRangeDisplayed={4}// колво на стрнаицу
    pageCount={3}
    previousLabel="<"
    renderOnZeroPageCount={null}
  />
  )
}

export default Pagination