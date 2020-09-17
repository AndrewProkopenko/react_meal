import React  from 'react'  
import SingleMealView from '../../views/SingleMealView' 
 
import { Link } from 'react-router-dom'

function Favorites(props) {
     
  

    function renderFavorites() { 
        
        
        return(    
            props.context.favorites.length>0 &&
            props.context.favorites.map( (meal) => (
                <div className='col-12 list-meals' key={meal.idMeal}> 
                    <Link to={`/meal/${meal.idMeal}`}>
                        <SingleMealView 
                            thumb={meal.strMealThumb}
                            title={meal.strMeal}
                            // category={meal.strCategory}
                            // area={meal.strArea} 
                            meal={meal} 
                            id={meal.idMeal} 
                            hendlerFavorites={props.context.hendlerFavorites}
                            favorites={props.context.favorites}
                            is-small-view={true} 
                                 
                        />
                    </Link> 
                </div>
            ))    
        )
    } 
    return ( 
        <div className='container container-styled '> 
            <h3>Favorites</h3>
            <div className='row flex-wrap'>
                { 
                    renderFavorites()
                }
            </div>
        </div> 
    )
}

export default Favorites

