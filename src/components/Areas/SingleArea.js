import React, { useState, useEffect } from 'react' 
import RenderAsList from '../../views/renderAsList'
import { FILTER_BY_AREA } from '../../actions'

function SingleCategory(props) {
    const [data, setData] = useState([]);
 
    useEffect(() => {
        if(data.length === 0 ) fetchCategory() 
    });

    
    function fetchCategory() {  
        FILTER_BY_AREA(props.match.params.area)
        .then( response => {   
            setData(response.meals)
        }) 
    }

    function renderMeals() { 
        return (  
                data.length>0 &&
                data.map( (meal) => (
                    <div className='col' key={meal.idMeal}>
                        <RenderAsList  
                            id={meal.idMeal}
                            name={meal.strMeal}  
                            thumb={meal.strMealThumb}  
                            className={'container-meals'} 
                            link={`/meal/${meal.idMeal}`}
                        /> 
                    </div>
                ))  
        )
    }

    return (
        <div className='container container-styled '> 
            <h3>
                {props.match.params.area}
            </h3>
            <div className='row'>
                { 
                    renderMeals()
                }
            </div>
        </div> 
    )
     
}

export default SingleCategory
 
