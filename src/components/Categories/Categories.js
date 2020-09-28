import React, { useEffect, useContext }  from 'react' 
import AppContext from '../../context/AppContext'

import { GET_CATEGORIES } from '../../actions/actions'

import RenderAsList from '../../views/renderAsList'
 

 
function Categories(props) {

    const [categories, setCategories] = React.useState([])
    
    const context = useContext(AppContext);

    useEffect( () => {
        cachingCategoryData() 
    }, [])

    function cachingCategoryData() { 
        if(context.categories.length > 0) { 
            setCategories(context.categories)
            console.log('cash')
        } 
        else {  
             fetchCategories()
             console.log('fetch')
        }
    }

    function fetchCategories() { 
        GET_CATEGORIES()
        .then( response => { 
            setCategories(response.categories) 
            context.setCategories(response.categories) 
        }) 
         
    }

    function renderCategories() { 
        return( 
            <div> 
                {   categories.length>0 &&
                    categories.map( (category) => (
                        <div className='col' key={category.idCategory}>
                            <RenderAsList  
                                    id={category.idCategory}
                                    name={category.strCategory} 
                                    desc={category.strCategoryDescription}
                                    thumb={category.strCategoryThumb}  
                                    link={`/category/${category.strCategory}`}
                                    className={'container-category'} 
                            /> 
                        </div>
                    )) 
                }
            </div> 
               
        )
    } 
    return ( 
        <div className='container container-styled '> 
            <h3>Categories</h3>
            <div className='row'>
                { 
                    renderCategories()
                }
            </div>
        </div> 
    )
}

export default Categories

