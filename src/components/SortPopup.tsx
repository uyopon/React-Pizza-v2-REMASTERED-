import React from 'react'
import {useSelector,useDispatch}from 'react-redux'
import {setSortBy} from '../redux/slices/filterSlice'


export const names = [
    {name: 'популярности (ASC)',sortProperty: '-rating'}, //проходимс с помощью map
    {name: 'популярности (DESC)',sortProperty: 'rating'},
    {name: 'цене (ASC)',sortProperty: '-price'},
    {name: 'цене (DESC)',sortProperty: 'price'},
    {name: 'алфавиту (ASC)',sortProperty: 'title'},
    {name: 'алфавиту (DESC)',sortProperty: '-title'}
]

const SortPopup=()=> {

    const dispatch = useDispatch() 
    
    const sortRef = React.useRef()

    const sortType = useSelector(state=> state.filter.sort)

    
    const [open,setOpen]= React.useState(false)

    const onClickName2= (obj)=> {
        dispatch(setSortBy(obj))
        setOpen(false)

    }

    React.useEffect(()=>{
        const handleClickOutsde = event=>{
            if(!event.path.includes(sortRef.current)){setOpen(false)}
        }
        document.body.addEventListener('click', handleClickOutsde)

        return()=>{ //this is unmount
            document.body.removeEventListener('click', handleClickOutsde) //чтобы addEventListener не сумировались при удалении компоненты
        }
    },[])

    
    return (
        <div className="sort" ref={sortRef}>
            <div className="sort__label">
                <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="#2C2C2C"
                    />
                </svg>
                <b>Сортировка по:</b>
                <span onClick ={()=>setOpen(!open) }>{sortType.name}</span>
            </div>
            {open && <div className="sort__popup">
                <ul>
                    {names.map((obj,index)=> <li key={index} className={obj.sortProperty===sortType.sortProperty? 'active':''}
                    onClick={()=>onClickName2(obj) }>{obj.name}</li>  )}
                    {/* <li className="active">популярности</li>
                    <li>цене</li>
                    <li>алфавиту</li> */}
                </ul>
            </div>}
        </div>
    )
}

export default SortPopup