import React from 'react'
import styles from './search.module.css'
import icon from '../../assets/img/211652_close_icon.svg'
import debounce from 'lodash.debounce'
import { useSelector,useDispatch } from 'react-redux'
import { setCurrentSearch } from '../../redux/slices/filterSlice'




const Search: React.FC = ()=> {

  const dispatch = useDispatch()

  const [value, setValue] = React.useState('') //быстрое отоброение данных из инпута

  const {currentSearch} = useSelector(({filter})=> filter)


  

  

  const inputRef = React.useRef<HTMLInputElement>(null)

  const onClickClear = () => {
    // setSearchValue('')
    dispatch(setCurrentSearch(''))
    setValue('')

    inputRef.current?.focus()

    

  }

  const updateSearchValue = React.useCallback(
    debounce((str) => { //отложена function

    //  setSearchValue(value)
     dispatch(setCurrentSearch(str))
     

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