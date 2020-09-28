import React, { useEffect, useContext }  from 'react';  
import AppContext from './context/AppContext'

import Home from './components/Home'

import Categories from './components/Categories/Categories'
import Areas from './components/Areas/Areas'
import Favorites from './components/Favorites/Favorites'

import SingleCategory from './components/Categories/SingleCategory'
import SingleArea from './components/Areas/SingleArea'
import SingleMeal from './components/Meal/SingleMeal'

import Header from './components/Header'
import SearchPage from './components/Search/SearchPage';


import { GET_AREA_LIST, GET_CATEGORIES_LIST, RANDON_MEAL } from './actions/actions'

import {
  BrowserRouter as Router,
  Switch,
  Route,  
} from "react-router-dom";


function App(props) {  
    useEffect( () => { 
        fetchData()
    }, [])
    
    const context = useContext(AppContext);
     

    function fetchData() { 
       console.log('fetchData') 
        RANDON_MEAL().then( response => {  
          context.setRandomMeal(response.meals[0]) 
        } ) 
        GET_CATEGORIES_LIST().then( response => {  
          context.setListCategories(response.meals) 
        } ) 
        GET_AREA_LIST().then( response => {  
          context.setListAreas(response.meals) 
        } )

        context.setFavoritesFromStorage()

    }
    async function updateRandom () { 
      await RANDON_MEAL().then( response => {  
        context.setRandomMeal(response.meals[0]) 
      } ) 
    }
    return (
      <Router> 
          <Header/> 
          <Switch>   
           
              <Route exact path="/categories" component={Categories} />  

              <Route exact path="/category/:category" component={SingleCategory} />  
              {/* <Route exact path="/category/:category" component={(routerProps) => <SingleCategory context={props.context} {... routerProps} />} /> */}

              <Route exact  path="/areas" component={Areas} />  

              <Route exact path="/area/:area" component={SingleArea} />  

              <Route exact path="/meal/:id" component={SingleMeal} />  
              
              <Route exact path="/search" component={SearchPage} />  
              
              <Route exact path="/search/:search" component={SearchPage} />
               
              <Route exact path="/favorites" >
                  <Favorites context={props.context} />
              </Route>  
              
              <Route path="/">
                  <Home  updateRandom={updateRandom} />
              </Route> 
          </Switch>
      </Router> 
    ) 
}

export default App;
