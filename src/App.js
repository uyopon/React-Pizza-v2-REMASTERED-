import React from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import Cart from './pages/Cart'
import NotFound from './pages/NotFound'
import { Routes, Route } from 'react-router-dom';

function App() {

  const [searchValue,SetSearchValue] = React.useState('')

  

  return (

    <div className="wrapper">
      <Header searchValue={searchValue} SetSearchValue={SetSearchValue}/>

      <div className="content">
        


          <Routes>
            <Route path='/' element={<Home searchValue={searchValue}/>} />
            <Route path='cart' element={<Cart />} />
            <Route path='*' element={<NotFound />} />
          </Routes>

        
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
//``