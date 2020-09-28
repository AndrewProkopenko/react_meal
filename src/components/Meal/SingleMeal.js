import React , { useEffect, useState } from 'react'
import { GET_SINGLE_MEAL } from '../../actions/actions' 

import RenderMeal from './RenderMeal'

// SingleMeal - компонент для отображения страницы рецепта
function SingleMeal(props) {
    
    const [meal, setMeal] = useState([]);  

    useEffect( () => { 
       fetchMeal() 
    }, [])

    function fetchMeal() { 
        GET_SINGLE_MEAL(props.match.params.id)
            .then( (response) => {  
                setMeal(response.meals[0])
            })
    }

 

    return ( 
        <div className='container container-styled '>  
            <RenderMeal  
                meal={meal}  
            />
        </div>    
    )
}

export default SingleMeal
