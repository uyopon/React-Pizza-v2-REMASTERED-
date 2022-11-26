import React from 'react'
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.css'

function Pagination() {
  return (
    <ReactPaginate
    className={styles.root}
    breakLabel="..."
    nextLabel=">"
    onPageChange={6}
    pageRangeDisplayed={5}
    pageCount={3}
    previousLabel="<"
    renderOnZeroPageCount={null}
  />
  )
}

export default Pagination