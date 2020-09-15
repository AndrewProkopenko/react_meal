import React from 'react'
import SearchForm from './SearchForm'
import RenderAsList from '../../views/renderAsList'
import AppContext from '../../context/AppContext' 


function SearchPage(props) { 
    let title = props.context.searchString ? `Search result for "${props.context.searchString}" ` : 'Search'
 
    function renderSearchAnswer() { 
        return( 
            <div> 
                {   props.context.searchResponse.length>0 &&
                    props.context.searchResponse.map( (meal) => (
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
                 props.context.isEmptySearchAnswer &&
                 <h4 className='text-center mt-4'>Ooops, Nothing Found</h4> 
                }
                
            </div> 
               
        )
    }

    return ( 
       
        <div className='container container-styled search-container'> 
            <h3> { title } </h3> 

            <AppContext.Consumer>
                {
                    context => (
                        <SearchForm  context={ context } isContained={true} />
                    )
                }
                
            </AppContext.Consumer> 

            <div className='row mt-4'>
                { 
                    renderSearchAnswer()
                }
            </div>
        </div>
    )
}

export default SearchPage
