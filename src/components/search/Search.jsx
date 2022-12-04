import React from 'react'
import styles from './search.module.css'
import icon from '../../assets/img/211652_close_icon.svg'
import { SearchContext } from '../../App'
import debounce from 'lodash.debounce'


function Search() {

  const [value, setValue] = React.useState('') //быстрое отоброение данных из инпута


  const { setSearchValue } = React.useContext(SearchContext) //for query request

  

  const inputRef = React.useRef()

  const onClickClear = () => {
    setSearchValue('')
    setValue('')
    inputRef.current.focus()

  }

  const updateSearchValue = React.useCallback(
    debounce((value) => { //отложена function

     setSearchValue(value)

      // setSearchValue(value.target.value)
    }, 900)
    ,[])


  const onChangeInput = event => {
    setValue(event.target.value) //моментально менть инпут
    updateSearchValue(event.target.value)

  }



  return (
    <div className={styles.root}>
      <input ref={inputRef} className={styles.input} onChange={onChangeInput} value={value} placeholder='поиск пиццы...' />

      {value && <img src={icon} className={styles.clearIcon} onClick={onClickClear} />}
    </div>

  )
}

export default Search


  // const testDebounce = React.useCallback( // при каждом измененнии state коспонент делает ререндер не все объекты создаютс новые ссылки.
  //   debounce(() => {
  //     console.log('hello')
  //   }, 1000)
  //     ,[])