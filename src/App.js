import React, { useEffect }  from 'react';  
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
     

    function fetchData() { 
       console.log('fetchData') 
        RANDON_MEAL().then( response => {  
          props.context.setRandomMeal(response.meals[0]) 
        } ) 
        GET_CATEGORIES_LIST().then( response => {  
          props.context.setListCategories(response.meals) 
        } ) 
        GET_AREA_LIST().then( response => {  
          props.context.setListAreas(response.meals) 
        } )
    }
    async function updateRandom () { 
      await RANDON_MEAL().then( response => {  
        props.context.setRandomMeal(response.meals[0]) 
      } ) 
    }
    return (
      <Router> 
          <Header/> 
          <Switch>   
              <Route exact path="/categories">
                <Categories context={props.context} />
              </Route>

              <Route exact path="/category/:category" component={SingleCategory} />  

              <Route exact  path="/areas" component={Areas} />  

              <Route exact path="/area/:area" component={SingleArea} />  

              <Route exact path="/meal/:id" component={SingleMeal} />  
              
              <Route exact path="/search" component={SearchPage} />  
              
              <Route exact path="/search/:search" >
                  <SearchPage context={props.context} />
              </Route>  
              <Route exact path="/favorites" >
                  <Favorites context={props.context} />
              </Route>  
              
              <Route path="/">
                <Home 
                updateRandom={updateRandom}
                  // meal={props.context.randomMeal}
                  // listCategories={props.context.listCategories}
                  // listAreas={props.context.listAreas}
                />
              </Route> 
          </Switch>
      </Router> 
    ) 
}

export default App;
