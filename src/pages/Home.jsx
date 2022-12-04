import React from 'react'
import Categories from '../components/Categories'
import SortPopup, { names } from '../components/SortPopup'
import LoadingBlock from '../components/LoadingBlock'
import PizzaBlock from '../components/PizzaBlock'
import Pagination from '../components/pagination/Pagination'
import { SearchContext } from '../App'
import {useSelector,useDispatch} from 'react-redux'
import { setCategory,setCurrentPage,setfilters } from '../redux/slices/filterSlice'
import axios from 'axios'
import qs from  'qs'
import{useNavigate} from 'react-router-dom'



function Home() {
  console.log(window.location.search)
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
  const [isLoading, setIsLoading] = React.useState(true) 


 

  

  React.useEffect(()=>{
    
    if(window.location.search){
      const params = qs.parse(window.location.search.substring(1)) //текущее значение аддресной строки превращаем  объект
      console.log(params)

      // console.log(params)//{sortProperty: '-rating', categoryId: '0', currentPage: '2'}

      const sort = names.find(obj=> obj.sortProperty===params.sortProperty)// нужно передать весь объект sort а не одно строкоовое значение
      
      dispatch(setfilters({...params,sort})) //передаем в redux параметры объекта
    }

  }

  ,[])


  React.useEffect(() => {
    setIsLoading(true)
    const order =sort.sortProperty.includes('-') ? 'desc' : 'asc'
    const sortBy = sort.sortProperty.replace('-','')
    const category =  categoryId > 0 ? `category=${categoryId}` : ''
    const search =searchValue? `search=${searchValue}`: ''
    
    
    

    axios.get(
      `https://637cafc572f3ce38eaaa7e31.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}&${search} `).then(
     

      
        (resp) => {
          setPizzas(resp.data)
          setIsLoading(false)
        })
    window.scrollTo(1, 1)

  }, [categoryId,sort,currentPage,searchValue])

  

  React.useEffect(()=>{const queryString = qs.stringify( //превращает obj в одну строку
    {
    sortProperty:sort.sortProperty,
    categoryId:categoryId,
    currentPage:currentPage,
  }
  )
  // console.log(queryString) //sortProperty=-rating&categoryId=0&currentPage=1

  navigate(`?${queryString}`)//вшивает в аддресную строку значение

},[categoryId, sort.sortProperty, currentPage])

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




