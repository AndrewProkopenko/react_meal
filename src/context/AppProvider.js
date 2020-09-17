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

                setFavorites: (newList) => { 
                    this.setState({  
                        favorites: newList
                    })  
                },

                hendlerFavorites: (meal, isFavorite) => { 
                    // console.log(meal)
                    // const id = meal
                    let newFavoritesArray =  this.state.favorites.slice() 
                    
                    if (isFavorite) {  
                        const filtered = newFavoritesArray.filter( item => {
                            return  item.id == meal.idMeal
                        }) 
                        this.setState({
                            favorites: filtered
                        })
                    }
                    else {  
                        newFavoritesArray.push(meal)
                        this.setState({
                            favorites: newFavoritesArray
                        })
                    }

                    // if(newFavoritesArray.length === 0 ) {
                    //     newFavoritesArray.push(meal)
                    //     this.setState({
                    //         favorites: newFavoritesArray
                    //     })
                    // }
                    // else newFavoritesArray.forEach((element) => {
                         
                    //     if(element.idMeal == meal.idMeal) { 
                    //         const filtered = newFavoritesArray.filter( item => {
                    //             return  item.id == meal.idMeal
                    //         }) 
                    //         this.setState({
                    //             favorites: filtered
                    //         })
                    //     } else { 
                    //         newFavoritesArray.push(meal)
                    //         this.setState({
                    //             favorites: newFavoritesArray
                    //         })
                    //     }
                    // });

                    // console.log(this.state.favorites)
                    // console.log(isFavorite)
                    // console.log(id)
                }

            } }>
                {this.props.children}
            </AppContext.Provider>
        )
    }

}

export default AppProvider; 
