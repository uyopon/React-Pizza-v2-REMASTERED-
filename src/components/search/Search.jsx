import React from 'react'
import styles from './search.module.css'
import icon from '../../assets/img/211652_close_icon.svg'


function Search({searchValue,SetSearchValue}) {

  

  return (
    <div className= {styles.root}>
      <input className= {styles.input} onChange={(event)=>SetSearchValue(event.target.value)} value = {searchValue} placeholder='поиск пиццы...'/>

      {searchValue && <img src= {icon} className={styles.clearIcon} onClick={()=>SetSearchValue('') }/>}
    </div>
    
  )
}

export default Search
