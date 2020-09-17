import React  from 'react' 
import { GET_CATEGORIES } from '../../actions/actions'

import RenderAsList from '../../views/renderAsList'
 

function Categories(props) {

    const [categories, setCategories] = React.useState([])

    React.useEffect( () => {
        cachingCategoryData() 
    }, [])

    function cachingCategoryData() { 
        if(props.context.categories.length > 0) { 
            setCategories(props.context.categories)
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
            props.context.setCategories(response.categories) 
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

