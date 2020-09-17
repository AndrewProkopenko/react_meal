import React , { useState } from 'react' 
import AppContext from '../context/AppContext'
import SingleMealView from '../views/SingleMealView'

import RenderNumberedList from '../views/RenderNumberedList'
import { NavLink } from 'react-router-dom'
// import  SingleMeal from './<'

function Home(props) {
    React.useEffect(() => { 
    }, [])
 

    const [hideCategories, setHideCategories] = useState(true)
    const [hideAreas, setHideAreas] = useState(true)

    let [moreCategoryTitle, setMoreCategoryTitle]  = useState('More')
    let [moreAreaTitle, setMoreAreaTitle]  = useState('More')


    function showList(target) { 
        if(target === 'category') { 
            if(moreCategoryTitle === 'More') setMoreCategoryTitle('Less') 
            else moreCategoryTitle = setMoreCategoryTitle('More') 
            setHideCategories(!hideCategories)
        }
        if(target === 'area') { 
            if(moreAreaTitle === 'More') setMoreAreaTitle('Less') 
            else setMoreAreaTitle('More') 
            setHideAreas(!hideAreas)
        }
    }
   

    return (
        <AppContext.Consumer>
            {
                context => ( 
                    <div className='container container-styled container-home'>
                        {/* <h1>
                            Meals-App works on React 
                        </h1> */}
                        <div className='row'>
                            <div className='col-12 col-lg-6'>
                                <div className='container-home-wrapper'>
                                    <div className='container-home-header'>
                                        <h5>
                                           Don't know what to cook? <br/> Random Meal for You! 
                                        </h5>
                                        <div onClick={props.updateRandom}>
                                            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 3C1 1.89543 1.89543 1 3 1H39C40.1046 1 41 1.89543 41 3V39C41 40.1046 40.1046 41 39 41H3C1.89543 41 1 40.1046 1 39V3Z" fill="#CABAD6"/>
                                            <path d="M11.0658 22.8248C9.8617 10.0511 25.5155 7.00973 30.3321 16.7421M30.3321 16.7421L30.9342 11.2676M30.3321 16.7421L25.5155 14.9173M30.9342 19.1752C32.1383 31.9489 16.4845 34.9903 11.6679 25.2579M11.6679 25.2579L11.0658 30.7324M11.6679 25.2579L16.4845 27.0827M3 41H39C40.1046 41 41 40.1046 41 39V3C41 1.89543 40.1046 1 39 1H3C1.89543 1 1 1.89543 1 3V39C1 40.1046 1.89543 41 3 41Z" stroke="#72518A"/>
                                            </svg>
                                        </div>

                                    </div>
                                    <div>
                                        <SingleMealView 
                                            thumb={context.randomMeal.strMealThumb}
                                            title={context.randomMeal.strMeal}
                                            category={ context.randomMeal.strCategory}
                                            area={context.randomMeal.strArea} 
                                            meal={context.randomMeal}

                                            id={context.randomMeal.idMeal}
                                            hendlerFavorites={context.hendlerFavorites}
                                            favorites={context.favorites}

                                            is-small-view={true} 
                                        />
                                        <NavLink className='btn btn-primary px-5  w-400 ' to={`/meal/${context.randomMeal.idMeal}`}>
                                            Read More
                                        </NavLink>
                                    </div>
                                  
                                </div>
                               
                                
                            </div>
                            <div className='col-12 col-lg-6'>   
                                <div className='item short-list'>
                                    <h5>List of Сategories</h5>
                                    <RenderNumberedList 
                                        data = {context.listCategories}
                                        value='strCategory' 
                                        isHide={hideCategories}
                                    /> 
                                    <button className='btn btn-primary btn-more' onClick={ () => { showList('category') }}>
                                        { moreCategoryTitle}
                                    </button>
                                </div>    
                                <div className='item short-list'>
                                    <h5>List of Areas</h5>
                                    <RenderNumberedList 
                                        data = {context.listAreas}
                                        value='strArea' 
                                        isHide={hideAreas}
                                    />   
                                    <button className='btn btn-primary btn-more' onClick={ () => { showList('area') }}>
                                        { moreAreaTitle}
                                    </button> 
                                </div>    
                            </div>
                        </div>
                    
                    </div>
                )
            }
            
        </AppContext.Consumer> 
        
    )
}
 

export default Home

