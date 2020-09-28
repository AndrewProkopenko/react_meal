import React , { Component } from 'react'
import AppContext from './AppContext'

class AppProvider extends Component { 

    state = {   
        categories: [] ,  

        searchString: '', 
        searchResponse: [], 
        isEmptySearchAnswer: false, 

        randomMeal: {}, 
        listCategories: {},
        listAreas: {},

        favorites: []
    }

    render() { 
        return (
            <AppContext.Provider value={ { 
                    categories: this.state.categories,   

                    searchResponse: this.state.searchResponse, 
                    searchString: this.state.searchString, 
                    isEmptySearchAnswer: this.state.isEmptySearchAnswer, 

                    randomMeal: this.state.randomMeal, 
                    listCategories: this.state.listCategories, 
                    listAreas: this.state.listAreas, 

                    favorites: this.state.favorites, 

                    setCategories: (categories) => {   
                        this.setState({ 
                            categories: categories
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
                    },

                    setRandomMeal: (meal) => { 
                        this.setState({  
                            randomMeal: meal
                        })  
                    },
                    setListCategories: (list) => { 
                        this.setState({  
                            listCategories: list
                        })  
                    },
                    setListAreas: (list) => { 
                        this.setState({  
                            listAreas: list
                        })  
                    }, 
                    
                    hendlerFavorites: (meal, id) => { 
                        let isFav = false 
                        
                        let newFavoritesArray =  this.state.favorites.slice()
                        
                        if( this.state.favorites.length > 0) { 
                            this.state.favorites.forEach( (item) => { 
                                if(item.idMeal === id ) {
                                    
                                    isFav = true  
                                } 
                            }) 
                            if(isFav) {  
                                newFavoritesArray = newFavoritesArray.filter( item => {
                                    return  item.idMeal !== id
                                })    
                                this.setState({
                                    favorites: newFavoritesArray
                                })
                            } else {
                                newFavoritesArray.push(meal)
                                this.setState({
                                    favorites: newFavoritesArray
                                }) 
                            }
                        }
                        else {
                            newFavoritesArray.push(meal)
                            this.setState({
                                favorites: newFavoritesArray
                            })
                        }

                        let favoritesForStorage = newFavoritesArray.slice()
                        favoritesForStorage =  JSON.stringify(favoritesForStorage)
                       
                        localStorage.setItem('react_meal_favorites', favoritesForStorage)

                      
                    },

                    setFavoritesFromStorage: () => {
                        let favorites = localStorage.getItem('react_meal_favorites')
                        favorites = JSON.parse(favorites)
                        this.setState({
                            favorites: favorites
                        })
                    }
                    

            } }>
                {this.props.children}
            </AppContext.Provider>
        )
    }

}

export default AppProvider; 