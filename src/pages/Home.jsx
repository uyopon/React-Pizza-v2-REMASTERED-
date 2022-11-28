import React from 'react'
import Categories from '../components/Categories'
import SortPopup from '../components/SortPopup'
import LoadingBlock from '../components/LoadingBlock'
import PizzaBlock from '../components/PizzaBlock'
import Pagination from '../components/pagination/Pagination'
import { SearchContext } from '../App'


function Home() {

  const {searchValue}= React.useContext(SearchContext)


  const [pizzas, setPizzas] = React.useState([]) //пиццы с сервера
  const [isLoading, setIsLoading] = React.useState(true) //скелетон

  
  const [categoryId,setCategoryId]= React.useState(0) //филтер дл запроса

  const [sortType,setSortType]= React.useState({name: 'популярности',sortProperty: 'rating'})//филтер дл запроса

  const [currentPage,setCurrentPage]= React.useState(1)


  React.useEffect(() => {
    setIsLoading(true)
    const order =sortType.sortProperty.includes('-') ? 'desc' : 'asc'
    const sortBy = sortType.sortProperty.replace('-','')
    const category =  categoryId > 0 ? `category=${categoryId}` : ''
    
    //https://637cafc572f3ce38eaaa7e31.mockapi.io/items?category=1&sortBy=rating&order=asc = пример

    fetch(`https://637cafc572f3ce38eaaa7e31.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order} `).then(
     

      (resp) => resp.json()).then(
        (arr) => {
          setPizzas(arr)
          setIsLoading(false)
        })
    window.scrollTo(1, 1)

  }, [categoryId,sortType,currentPage])

  const items = pizzas.filter((obj)=>
  {
      if(obj.title.toLowerCase().includes(searchValue.toLowerCase())){return true}
      return false
  }

      ).map((obj) => <PizzaBlock key={obj.id} {...obj} />)


  return (
    <div className="container">

      <div className="content__top">
        <Categories onClickCategory= {(index)=> setCategoryId(index)} categoryId={categoryId} />

        <SortPopup sortType={sortType} onClickName={(obj)=> setSortType({name: obj.name,sortProperty: obj.sortProperty })} />

      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">



        {isLoading ? [...new Array(4)].map((_, index) => <LoadingBlock key={index} />) :items }

        


        
      </div>
      <Pagination onChange={(page) => setCurrentPage(page) }/> 
    </div>

  )
}
//переписать пагинацию на самописную
export default Home




