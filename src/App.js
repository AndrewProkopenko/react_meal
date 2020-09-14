import React from 'react';  
import Home from './components/Home'

import Categories from './components/Categories/Categories'
import Areas from './components/Areas/Areas'

import SingleCategory from './components/Categories/SingleCategory'
import SingleArea from './components/Areas/SingleArea'
import SingleMeal from './components/Meal/SingleMeal'


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from './components/Header'
import SearchPage from './components/Search/SearchPage';

function App(props) {  
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
              
              <Route path="/">
                <Home />
              </Route> 
          </Switch>
      </Router> 
    ) 
}

export default App;
