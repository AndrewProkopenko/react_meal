import React, { useEffect, useContext } from 'react'
import AppContext from '../../context/AppContext'

import SingleMealView from '../../views/SingleMealView' 


// функция RenderMeal - умный компонент , определяющий является ли рецепт Лайкнутым и передающий эти данные тупому компоненту SingleMealView
function RenderMeal(props) {
     
    const [isFavorite, setIsFavorite] = React.useState(false)
    
    const context = useContext(AppContext);

    useEffect( () => {
        isFavoriteMeal()
    })
    function isFavoriteMeal() {  
        let isFav = context.favorites.find( item => ( 
            item.idMeal === props.meal.idMeal 
        ))
 
        if(!!isFav) { 
            setIsFavorite(true)  
        } else { 
            setIsFavorite(false)
        }  
    }

    return ( 
        <> 
            <SingleMealView 
                thumb={props.meal.strMealThumb}
                title={props.meal.strMeal}
                category={props.meal.strCategory}
                area={props.meal.strArea}
                description={props.meal.strInstructions}
                meal={props.meal} 
                id={props.meal.idMeal} 
                hendlerFavorites={context.hendlerFavorites} 
                isFavorite={isFavorite}
                isHomeView={props.isHomeView}
                isFavoriteView={props.isFavoriteView}
            /> 
        </>
    )
}

export default RenderMeal
