import React from 'react'
import Header from './components/Header'
import Categories from './components/Categories'
import SortPopup from './components/SortPopup'
import PizzaBlock from './components/PizzaBlock'
import LoadingBlock from './components/LoadingBlock'



function App() {
  
  const [pizzas,setPizzas]= React.useState([])
  const [isLoading,setIsLoading]= React.useState(true)

  React.useEffect(()=>{
  fetch('https://637cafc572f3ce38eaaa7e31.mockapi.io/items').then(
    (resp)=>resp.json()).then(
    (arr)=>{setPizzas(arr);
    setIsLoading(false)})

},[])


  

  return (
    
    <div className="wrapper">
      <Header />
      

      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <SortPopup />

          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">

          {isLoading? [...new Array(4)].map((_,index)=><LoadingBlock key={index}/>) : pizzas.map( (obj)=><PizzaBlock key={obj.id} {...obj}/>)}

          
          </div>
        </div>
      </div>
    </div>
  )
}

export default App



// z я
// cd react_pizza_2
// !
// c
// Z
//pizza
//A