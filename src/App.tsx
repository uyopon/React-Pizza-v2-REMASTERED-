import React from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import Cart from './pages/Cart'
import NotFound from './pages/NotFound'
import { Routes, Route,  } from 'react-router-dom';
import FullPizza from './components/FullPizza'


// export const SearchContext = React.createContext()

function App() {


  // const [searchValue, setSearchValue] = React.useState('')

  return (

    <div className="wrapper">
      {/* <SearchContext.Provider value={{searchValue, setSearchValue}}> */}
        <Header />

        <div className="content">

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='cart' element={<Cart />} />
            <Route path='pizza/:id' element={<FullPizza/>} />
            <Route path='*' element={<NotFound />} />
          </Routes>

        </div>
      {/* </SearchContext.Provider> */}
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