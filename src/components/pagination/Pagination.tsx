import React from 'react'
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.css'

type PaginationProps = {onChange:any,currentPage:number}

const Pagination:React.FC<PaginationProps> = ({onChange,currentPage})=> {
  
  return (
    <ReactPaginate
    className={styles.root}
    breakLabel="..."
    nextLabel=">"
    onPageChange={event => onChange(event.selected+1)}
    pageRangeDisplayed={4}// колво на стрнаицу
    pageCount={3}
    forcePage={currentPage - 1}
    previousLabel="<"
   
  />
  )
}

export default Pagination