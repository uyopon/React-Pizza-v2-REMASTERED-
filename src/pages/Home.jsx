import React from 'react'
import Categories from '../components/Categories'
import SortPopup, { names } from '../components/SortPopup'
import LoadingBlock from '../components/LoadingBlock'
import PizzaBlock from '../components/PizzaBlock'
import Pagination from '../components/pagination/Pagination'
import { useSelector, useDispatch } from 'react-redux'
import { setCategory, setCurrentPage, setfilters } from '../redux/slices/filterSlice'
import qs from 'qs'
import { useNavigate } from 'react-router-dom'
import { fetchPizzas } from '../redux/slices/pizzas.slice'






function Home() {


  

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isSearch = React.useRef(false) //нужно ли делатьпоиск через url
  const isMounted = React.useRef(false) //for url string
  const { categoryId, sort, currentPage } = useSelector(({ filter }) => filter)
  const { items ,status} = useSelector(({ pizzas }) => pizzas)


  const onClickCategory = (id) => {
    dispatch(setCategory(id)) //{type: 'filter/setCategory', payload: 1}
  }

  const onChangePage = number => {
    dispatch(setCurrentPage(number))
  }

  const {currentSearch} = useSelector(({filter})=> filter)

  // const { searchValue } = React.useContext(SearchContext)

  
  const getPizzas = async () => {

    
    const order = sort.sortProperty.includes('-') ? 'desc' : 'asc'
    const sortBy = sort.sortProperty.replace('-', '')
    const category = categoryId > 0 ? `category=${categoryId}` : ''
    const search = currentSearch ? `search=${currentSearch}` : ''

    // await axios.get(
    //   `https://637cac572f3ce38eaaa7e31.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}&${search} `).then(

    //     (resp) => {
    //       setPizzas(resp.data)
    //       setIsLoading(false)
    //     })
    //     .catch((error)=>{  //отлавливаем ошибку
    //       setIsLoading(false)
    //     })


    dispatch(fetchPizzas({
      order,
      sortBy,
      category,
      search,
      currentPage
    }))

  }



React.useEffect(() => {

  if (window.location.search) {


    const params = qs.parse(window.location.search.substring(1)) //текущее значение аддресной строки превращаем  объект

    // console.log(params)//{sortProperty: '-rating', categoryId: '0', currentPage: '2'}

    const sort = names.find(obj => obj.sortProperty === params.sortProperty)// нужно передать весь объект sort а не одно строкоовое значение

    dispatch(setfilters({ ...params, sort })) //передаем в redux параметры объекта

    isSearch.current = false // при дефолт 1 fetch request , при ручном url - 2 fetch запроса
  }

}
  , [])


React.useEffect(() => {


  window.scrollTo(1, 1)
  if (!isSearch.current) { // это нужно чтобы при измененнии ручного url запрос не отправллс дважды



    getPizzas()
  }

  isSearch.current = false

}, [categoryId, sort, currentPage, currentSearch])



React.useEffect(() => {

  if (isMounted.current) {

    const queryString = qs.stringify( //превращает obj в одну строку
      {
        sortProperty: sort.sortProperty,
        categoryId: categoryId,
        currentPage: currentPage,
      }

    )
    navigate(`?${queryString}`)//вшивает в аддресную строку значение
  }
  // console.log(queryString) //sortProperty=-rating&categoryId=0&currentPage=1

  isMounted.current = true
}, [categoryId, sort.sortProperty, currentPage])

// const items = pizzas.filter((obj)=>
// {
//     if(obj.title.toLowerCase().includes(searchValue.toLowerCase())){return true}
//     return false
// }

//     ).map((obj) => <PizzaBlock key={obj.id} {...obj} />)


return (
  <div className="container">

    <div className="content__top">
      <Categories onClickCategory={onClickCategory} categoryId={categoryId} />

      <SortPopup />

    </div>
    <h2 className="content__title">Все пиццы</h2>
    <div className="content__items">


      {status === 'error'? <h2>ошибка сервера =(</h2> :
      status === 'loading'? [...new Array(4)].map((_, index) => <LoadingBlock key={index} />) : items.map((obj) =>  < PizzaBlock  {...obj} key = {obj.id}/>)
}


    </div>
    <Pagination currentPage={currentPage} onChange={(page) => onChangePage(page)} />
  </div>

)
}
//переписать пагинацию на самописную
export default Home




