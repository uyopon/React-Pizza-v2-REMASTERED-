import React from 'react'
import styles from './search.module.css'


function Search() {
  return (
    <div className= {styles.root}>
        <input className= {styles.input} placeholder='поиск пиццы...'/>
    </div>
    
  )
}

export default Search