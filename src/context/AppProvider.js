import React , { Component } from 'react'
import AppContext from './AppContext'

class AppProvider extends Component { 

    state = {   
        categories: [] , 
        isCategoryFetched: false,
        searchString: '', 
        searchResponse: [], 
        isEmptySearchAnswer: false
    }

    render() { 
        return (
            <AppContext.Provider value={ { 
                categories: this.state.categories,  
                isCategoryFetched: this.state.isCategoryFetched,  

                searchResponse: this.state.searchResponse, 
                searchString: this.state.searchString, 
                isEmptySearchAnswer: this.state.isEmptySearchAnswer, 

                setCategories: (categories) => {   
                    this.setState({ 
                        categories: categories,
                        isCategoryFetched: true
                    })  
                },
                setSearchResponse: (response) => { 
                    this.setState({ 
                        searchResponse: response, 
                    })  
                },
                setSearchString: (string) => { 
                    this.setState({  
                        searchString: string
                    })  
                },
                setIsEmptySearchAnswer: (bool) => {
                    this.setState({ 
                        isEmptySearchAnswer: bool
                    })
                }

            } }>
                {this.props.children}
            </AppContext.Provider>
        )
    }

}

export default AppProvider; 
