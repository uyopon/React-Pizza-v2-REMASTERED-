import React from 'react'
import Categories from '../components/Categories'
import SortPopup from '../components/SortPopup'
import LoadingBlock from '../components/LoadingBlock'
import PizzaBlock from '../components/PizzaBlock'



function Home() {
  const [pizzas, setPizzas] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)

  const [categoryId,setCategoryId]= React.useState(0)

  const [sortType,setSortType]= React.useState({name: 'популярности',sortProperty: 'rating'})

  console.log(categoryId,sortType ) 


  React.useEffect(() => {
    setIsLoading(true)
    fetch('https://637cafc572f3ce38eaaa7e31.mockapi.io/items' ).then(
      (resp) => resp.json()).then(
        (arr) => {
          setPizzas(arr)
          setIsLoading(false)
        })
    window.scrollTo(1, 1)

  }, [categoryId,sortType])


  return (
    <div className="container">

      <div className="content__top">
        <Categories onClickCategory= {(index)=> setCategoryId(index)} categoryId={categoryId} />

        <SortPopup sortType={sortType} onClickName={(obj)=> setSortType({name: obj.name,sortProperty: obj.sortProperty })} />

      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">

        {isLoading ? [...new Array(4)].map((_, index) => <LoadingBlock key={index} />) : pizzas.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}


      </div>
    </div>

  )
}

export default Home



