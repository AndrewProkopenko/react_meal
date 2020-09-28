import React, { useState , useEffect, useContext } from 'react'
import { Redirect } from 'react-router-dom'

import AppContext from '../../context/AppContext'

import { SEARCH_MEALS } from '../../actions/actions' 
 

function SearchForm(props) { 
    let [searchValue, setSearchValue] = useState('')
    let [isRedirect, setIsRedirect] = useState(false)
    let [isDisabled, setIsDisabled] = useState(true)

    const context = useContext(AppContext);

    // let value
    let value 
  
    
    useEffect( () => {  
        value = searchValue 
    }, [])

    function onFormSumbit(e) { 
        e.preventDefault() 
        context.setSearchString(searchValue)
        searchQuery()
        setIsRedirect(true)  
    }

    function searchQuery() {  
        SEARCH_MEALS(searchValue)
            .then( response => {   
                if(response.meals == null) {   
                    context.setSearchResponse([])
                    context.setIsEmptySearchAnswer(true)
                }
                else {  
                    context.setSearchResponse(response.meals) 
                    context.setIsEmptySearchAnswer(false) 
                } 
                setIsRedirect(false)  
            })  

    }
    
    function onChangeInput(e) {   
        setSearchValue(e.target.value) 

        if(e.target.value.length > 2) setIsDisabled(false)
        else setIsDisabled(true)
        
        setIsRedirect(false) 
    }


    return (
        <form 
            onSubmit={onFormSumbit}
            className="d-flex search-form" 
        >
            <input 
                type="search" 
                placeholder="Search" 
                aria-label="Search"
                value={value}
                onChange={onChangeInput} 
                minLength='3'
            />
            <button 
                className="btn btn-secondary" 
                type="submit"
                disabled={isDisabled}
            >
                Search
            </button>
            
            { 
                isRedirect &&  
                <Redirect to={`/search/${searchValue}`}  />  
            }
           
        </form>
    )
}

export default SearchForm
