import React from 'react'
import styles from './search.module.css'


function Search() {
  return (
    <div>
        <input className= {styles.root} placeholder='поиск пиццы...'/>
    </div>
    
  )
}

export default Search