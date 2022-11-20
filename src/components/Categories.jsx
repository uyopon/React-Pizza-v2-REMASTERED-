import React from 'react'


const categories = ['Все','Мясные','Вегетарианская','Гриль','Острые','Закрытые',]


function Categories() {
    

    const [category,setCategory]= React.useState(0)

    const onClickCategory = (index)=>{
        setCategory(index)

    }


    return (
        <div className="categories">
            <ul>
                {categories.map((elem,index)=><li key={index} className ={category===index?'active':'' }
                 onClick={()=> onClickCategory(index) }>{elem}</li> )}
  
            </ul>
        </div>

    )
}
export default Categories