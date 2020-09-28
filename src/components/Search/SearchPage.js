import React, { useContext } from 'react'

import AppContext from '../../context/AppContext'

import SearchForm from './SearchForm'
import RenderAsList from '../../views/renderAsList' 


function SearchPage(props) { 
    
    const context = useContext(AppContext);

    let title = context.searchString ? `Search result for "${context.searchString}" ` : 'Search'
 
    function renderSearchAnswer() { 
        return( 
            <div> 
                {   context.searchResponse.length>0 &&
                    context.searchResponse.map( (meal) => (
                        <div className='col' key={meal.idMeal}>
                            <RenderAsList  
                                    id={meal.idMeal}
                                    name={meal.strMeal}  
                                    thumb={meal.strMealThumb}  
                                    link={`/meal/${meal.idMeal}`}
                                    className={'container-category'} 
                            /> 
                        </div>
                    )) 
                }
                {
                 context.isEmptySearchAnswer &&
                 <h4 className='text-center mt-4'>Ooops, Nothing Found</h4> 
                }
                
            </div> 
               
        )
    }

    return ( 
       
        <div className='container container-styled search-container'> 
            <h3> { title } </h3> 
            
            <SearchForm isContained={true} />
                 
            <div className='row mt-4'>
                { 
                    renderSearchAnswer()
                }
            </div>
        </div>
    )
}

export default SearchPage
