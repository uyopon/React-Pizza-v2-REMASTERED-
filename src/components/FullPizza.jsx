import axios from 'axios'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'




function FullPizza() {

  const navigate = useNavigate()

  const { id } = useParams()

  const [pizza, setPizza] = React.useState()


  React.useEffect(() => {
    async function fetchPizza() {


      try {
        const { data } = await axios.get('https://637cafc572f3ce38eaaa7e31.mockapi.io/items/' + id)
        setPizza(data)

        console.log(pizza)


      } catch (error) {
        alert('ошибка сервера')
        navigate('/')

      }



    }

    fetchPizza()

  }, [])

  if (!pizza) { return 'загрузка...' }

  return (

    <div className="container">

      <img
        
        src={pizza.imageUrl}
        alt="Pizza"
      />

      <h4 className="pizza-block__title">{pizza.title}</h4>

      <div className="pizza-block__price">от {pizza.price} ₽</div>




    </div>




  )
}

export default FullPizza