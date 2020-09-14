import React from 'react'
import { NavLink } from 'react-router-dom'

function SingleMealView(props) { 

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
 
    return (
        <div className='single-meal row'> 
            <div className="col-12 col-md-3">
                <img src={props.thumb} alt={props.title}></img>
            </div>
            <div className="col-12 col-md-9">
                <div className='pl-md-3'>
                    <h4 className='mt-4 mt-md-0'>
                        {props.title}
                    </h4> 
                    <div className='link'>
                        Category: 
                        <NavLink to={`/category/${props.category}`}> 
                            { props.category }
                        </NavLink> 
                    </div>
                    <div className='link'>
                        Area: 
                        <NavLink to={`/area/${props.area}`}> 
                            { props.area } 
                        </NavLink> 
                    </div> 
                    <div className='description'>
                        { props.description }
                    </div> 
                    
                    <div className='row'>
                        <div className='col-12 col-md-8 col-lg-6'>
                            { renderIngredients() }
                        </div>
                    </div>
                </div>           
            </div>
        </div>
    )
}

export default SingleMealView
