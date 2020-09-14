import React , { useEffect, useState } from 'react'
import { GET_SINGLE_MEAL } from '../../actions'

import SingleMealView from '../../views/SingleMealView' 


function SingleMeal(props) {
    
    const [meal, setMeal] = useState([]); 

    useEffect( () => { 
        if(meal.length === 0 ) fetchMeal() 
    })

    function fetchMeal() { 
        GET_SINGLE_MEAL(props.match.params.id)
            .then( (response) => {  
                setMeal(response.meals[0])
            })
    }


    return (
        <div className='container container-styled '> 
             <SingleMealView 
                thumb={meal.strMealThumb}
                title={meal.strMeal}
                category={meal.strCategory}
                area={meal.strArea}
                description={meal.strInstructions}
                meal={meal} 
            />
        </div> 
    )
}

export default SingleMeal
