import React from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import { Routes, Route } from 'react-router-dom';




function App() {





  return (

    <div className="wrapper">
      <Header />


      <div className="content">
        <div className="container">


          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<NotFound />} />
          </Routes>


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