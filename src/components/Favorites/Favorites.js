import React, { useContext }  from 'react'  
import AppContext from '../../context/AppContext' 

import RenderMeal from '../Meal/RenderMeal'
 
function Favorites(props) {
     
    const context = useContext(AppContext);
 
    function renderFavorites() {   
        if (context.favorites.length > 0) 
        return (  
            context.favorites.map( (meal) => (
                <div className='col-12 list-meals' key={meal.idMeal}>  
                        <RenderMeal  
                            meal={meal}  
                            isFavoriteView={true}
                        />  
                </div>
            ))    
        )
        return (
            <h5 className='text-center mt-3' >
                You don't have any favorites
            </h5>
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

