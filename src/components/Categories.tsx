import React from 'react'


const categories = ['Все','Мясные','Вегетарианская','Гриль','Острые','Закрытые',]


type CategoriesProps = {onClickCategory: any, categoryId: number,}


const Categories : React.FC<CategoriesProps>=({onClickCategory,categoryId})=> {

    
    return (
        <div className="categories">
            <ul>
                {categories.map((elem,index)=><li key={index} className ={categoryId===index?'active':'' }
                 onClick={()=> onClickCategory(index) }>{elem}</li> )  }
  
            </ul>
        </div>

    )
}
export default Categories