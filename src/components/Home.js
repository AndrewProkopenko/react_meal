import React , { useState, useContext } from 'react' 
import { NavLink } from 'react-router-dom'

import AppContext from '../context/AppContext'

import RenderMeal from './Meal/RenderMeal' 
import RenderNumberedList from '../views/RenderNumberedList' 

function Home(props) {

    const context = useContext(AppContext);

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
                            <div className='btn  btn-favorite btn-update' onClick={props.updateRandom}>
                                <svg  
                                    viewBox="0 0 477.867 477.867" >
                                    <g>
                                        <g>
                                            <path d="M409.6,0c-9.426,0-17.067,7.641-17.067,17.067v62.344C304.667-5.656,164.478-3.386,79.411,84.479
                                                c-40.09,41.409-62.455,96.818-62.344,154.454c0,9.426,7.641,17.067,17.067,17.067S51.2,248.359,51.2,238.933
                                                c0.021-103.682,84.088-187.717,187.771-187.696c52.657,0.01,102.888,22.135,138.442,60.976l-75.605,25.207
                                                c-8.954,2.979-13.799,12.652-10.82,21.606s12.652,13.799,21.606,10.82l102.4-34.133c6.99-2.328,11.697-8.88,11.674-16.247v-102.4
                                                C426.667,7.641,419.026,0,409.6,0z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M443.733,221.867c-9.426,0-17.067,7.641-17.067,17.067c-0.021,103.682-84.088,187.717-187.771,187.696
                                                c-52.657-0.01-102.888-22.135-138.442-60.976l75.605-25.207c8.954-2.979,13.799-12.652,10.82-21.606
                                                c-2.979-8.954-12.652-13.799-21.606-10.82l-102.4,34.133c-6.99,2.328-11.697,8.88-11.674,16.247v102.4
                                                c0,9.426,7.641,17.067,17.067,17.067s17.067-7.641,17.067-17.067v-62.345c87.866,85.067,228.056,82.798,313.122-5.068
                                                c40.09-41.409,62.455-96.818,62.344-154.454C460.8,229.508,453.159,221.867,443.733,221.867z"/>
                                        </g>
                                    </g> 
                                </svg>
                            </div> 

                        </div>
                        <div>
                            <RenderMeal
                                 meal={context.randomMeal}
                                 isHomeView={true}
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
 

export default Home

