import React, { Component } from 'react' 
import { GET_CATEGORIES } from '../../actions'

import RenderAsList from '../../views/renderAsList'

export default class Categories extends Component {
    constructor(props) { 
        super(props)
        this.state = {
            categories: []
        } 
    }

    componentDidMount() {   
        this.cachingCategoryData()
    }

    cachingCategoryData() { 
        if(this.props.context.isCategoryFetched) { 
            this.setState( { 
                categories: this.props.context.categories
            })
            console.log('cash')
        } 
        else {  
             this.fetchCategories()
             console.log('fetch')
        }
    }

    fetchCategories() { 
        GET_CATEGORIES()
        .then( response => { 
            this.setState({ 
                categories: response.categories
            })
            
            this.props.context.setCategories(response.categories) 
        }) 
         
    }

   
    renderCategories() { 
        return( 
            <div> 
                {   this.state.categories.length>0 &&
                    this.state.categories.map( (category) => (
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
    

    render() {
        return (
            <div className='container container-styled '> 
                <h3>Categories</h3>
                <div className='row'>
                    { 
                        this.renderCategories()
                    }
                </div>
            </div>
        )
    }
}
