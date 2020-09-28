import React from 'react'
import { NavLink } from 'react-router-dom' 

function SingleMealView(props) { 
    
    let favClassName = props.isFavorite ? 'favorite' : 'unfavorite'

    React.useEffect( () => { 
        // isFavoriteMeal()
    },  )
 

    function renderIngredients() { 
        let ingredients = [] 
            let measure = [] 
        if(props.meal.length !== 0) { 
            for( let i = 1; i<=20; i++ ) { 
                let propertyIng = 'strIngredient' + i
                let propertyMea = 'strMeasure' + i
                if(props.meal[propertyIng] !== '' && props.meal[propertyIng] !==  null) { 
                    ingredients.push(props.meal[propertyIng])
                    measure.push(props.meal[propertyMea]) 
                }
            } 
        } 
        return(
            <table className="table table-striped table-hover ">
                <thead>
                    <tr> 
                        <th scope="col">Ingredients</th>
                        <th scope="col">Measure </th> 
                    </tr>
                </thead>
                <tbody>
                    {
                        ingredients.map( (item, index) => (
                            <tr key={index}>  
                                <td>
                                    {ingredients[index]}    
                                </td> 
                                <td>{measure[index]}</td>
                            </tr> 
                        ))
                    }
                  
                </tbody>
            </table>
        )
    }
 
    function renderDescrtIngred() { 
        if(props.isFavoriteView) return 
        if(props.isHomeView) return 
        else return(
            <>
                <div className='description'>
                    { props.description }
                </div> 
                
                <div className='row'>
                    <div className='col-12 col-md-8 col-lg-6'>
                        { renderIngredients() }
                    </div>
                </div>
            </>
        )
    }

    function renderLinks() { 
        if(props.isFavoriteView) return 
        return( 
            <>
            { 
                props.category && 
                <div className='link'>
                    Category: 
                    <NavLink to={`/category/${props.category}`}> 
                        { props.category }
                    </NavLink> 
                </div>
            }
            { 
                props.area && 
                <div className='link'>
                    Area: 
                    <NavLink to={`/area/${props.area}`}> 
                        { props.area } 
                    </NavLink> 
                </div> 
            }
            </>
        )
    }

    function renderTitle() {  
        if(props.isFavoriteView || props.isHomeView) return (
            <NavLink to={`/meal/${props.id}`}>
                <h4>
                    {props.title}
                </h4> 
            </NavLink> 
        )
        return (
            <h4>
                {props.title }
            </h4>  
        )
    }

    function renderThumb() {  
        if(props.isFavoriteView || props.isHomeView) return (
            <NavLink to={`/meal/${props.id}`}>
                <div className='img' style={{backgroundImage: `url(${props.thumb})`}}></div> 
            </NavLink> 
        )
        return (
            <h4>
                <div className='img' style={{backgroundImage: `url(${props.thumb})`}}></div> 
            </h4>  
        )
    }

  

   
    
    return (
        <div className='single-meal row'> 
            <div className="col-12 col-lg-3">
                {
                    renderThumb()
                } 
            </div>
            <div className="col-12 col-lg-9">
                <div className='pl-lg-3 mt-4 mt-lg-0'>
                    <div className='d-flex justify-content-between'>
                        
                        {
                            renderTitle()
                        }

                        <div 
                            className={`btn  btn-favorite ${favClassName}`}
                            onClick={ ()=>{ props.hendlerFavorites(props.meal, props.id)} } 
                        >
                                <svg xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181"/></svg>
                        </div>
                    </div>
                    {
                        renderLinks()
                    }
                    
                    {
                        renderDescrtIngred()
                    }
                </div>           
            </div> 
        </div>
    )
}

export default SingleMealView
