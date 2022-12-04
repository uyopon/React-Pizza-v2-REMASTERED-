import React from 'react'
import Categories from '../components/Categories'
import SortPopup from '../components/SortPopup'
import LoadingBlock from '../components/LoadingBlock'
import PizzaBlock from '../components/PizzaBlock'
import Pagination from '../components/pagination/Pagination'
import { SearchContext } from '../App'
import {useSelector,useDispatch} from 'react-redux'
import { setCategory,setCurrentPage } from '../redux/slices/filterSlice'
import axios from 'axios'
import qs from  'qs'
import{useNavigate} from 'react-router-dom'



function Home() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {categoryId,sort,currentPage} = useSelector(({filter}) => filter)//// fuckkkk

 
const onClickCategory=(id)=>{
  dispatch(setCategory(id)) //{type: 'filter/setCategory', payload: 1}
}

const onChangePage =number=>{
  dispatch(setCurrentPage(number))

}

  const {searchValue}= React.useContext(SearchContext)


  const [pizzas, setPizzas] = React.useState([]) //пиццы с сервера
  const [isLoading, setIsLoading] = React.useState(true) //скелетон


 

  // const [currentPage,setCurrentPage]= React.useState(1)


  React.useEffect(() => {
    setIsLoading(true)
    const order =sort.sortProperty.includes('-') ? 'desc' : 'asc'
    const sortBy = sort.sortProperty.replace('-','')
    const category =  categoryId > 0 ? `category=${categoryId}` : ''
    const search =searchValue? `search=${searchValue}`: ''
    
    
    //https://637cafc572f3ce38eaaa7e31.mockapi.io/items?category=1&sortBy=rating&order=asc = пример

    axios.get(
      `https://637cafc572f3ce38eaaa7e31.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}&${search} `).then(
     

      
        (resp) => {
          setPizzas(resp.data)
          setIsLoading(false)
        })
    window.scrollTo(1, 1)

  }, [categoryId,sort,currentPage,searchValue])

  console.log(categoryId,sort.sortProperty,currentPage,searchValue)

  React.useEffect(()=>{const queryString = qs.stringify( //url
    {
    sortProperty:sort.sortProperty,
    categoryId:categoryId,
    currentPage:currentPage,
  }
  )
  console.log(queryString)
  navigate(`?${queryString}`)
},[categoryId,sort.sortProperty,currentPage,searchValue])

  // const items = pizzas.filter((obj)=>
  // {
  //     if(obj.title.toLowerCase().includes(searchValue.toLowerCase())){return true}
  //     return false
  // }

  //     ).map((obj) => <PizzaBlock key={obj.id} {...obj} />)


  return (
    <div className="container">

      <div className="content__top">
        <Categories onClickCategory= {onClickCategory} categoryId={categoryId} />

        <SortPopup  />

      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">



        {isLoading ? [...new Array(4)].map((_, index) => <LoadingBlock key={index} />) :pizzas.map((obj) => <PizzaBlock key={obj.id} {...obj} />) }

        


        
      </div>
      <Pagination currentPage={currentPage} onChange={(page)=>onChangePage(page) }/> 
    </div>

  )
}
//переписать пагинацию на самописную
export default Home




