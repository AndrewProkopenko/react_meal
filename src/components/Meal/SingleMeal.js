import React , { useEffect, useState } from 'react'
import { GET_SINGLE_MEAL } from '../../actions/actions'
import AppContext from '../../context/AppContext'

import SingleMealView from '../../views/SingleMealView' 


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
        <AppContext.Consumer>
        {
            context => ( 

                <div className='container container-styled '>  
                    <SingleMealView 
                        thumb={meal.strMealThumb}
                        title={meal.strMeal}
                        category={meal.strCategory}
                        area={meal.strArea}
                        description={meal.strInstructions}
                        meal={meal} 
                        id={meal.idMeal}
                        hendlerFavorites={context.hendlerFavorites}
                        favorites={context.favorites} 
                    />
                </div> 
            )
        }
        
    </AppContext.Consumer> 
    
      
    )
}

export default SingleMeal
