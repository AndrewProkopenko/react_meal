import React from 'react'
import { NavLink } from 'react-router-dom'
import OnceMeal from './OnceMeal'

function SingleMealView(props) { 

    // let isFavorite = false
    const [isFavorite, setIsFavorite] = React.useState(false)
    let favString = isFavorite ? 'favorite' : 'unfavorite'

    React.useEffect( () => { 
        isFavoriteMeal()
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
        // console.log(props['is-small-view'])
        if(props['is-small-view']) return 
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

    function isFavoriteMeal() { 
        console.log('isfavMeal')  

        props.favorites.forEach((element) => { 
            if(element.idMeal == props.id) { 
                setIsFavorite(true)
            } else { 
                setIsFavorite(false)
            }
        });

        console.log(isFavorite)
    }

    function hendlerFavorites() {
        
    }

   
    
    return (
        <div className='single-meal row'> 
            <OnceMeal
                thumb={props.thumb} 
                title={props.title}
                category={props.category}
                area={props.area}
                description={props.description}
                meal={props.meal} 
                id={props.id}
                hendlerFavorites={props.hendlerFavorites}
                favorites={props.favorites} 
                isFavorite={isFavorite}
                favString={favString}

                renderLinks={renderLinks}
                renderDescrtIngred={renderDescrtIngred}
            />
        </div>
    )
}

export default SingleMealView
