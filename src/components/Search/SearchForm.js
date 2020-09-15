import React, { useState , useEffect} from 'react'
import { Redirect } from 'react-router-dom'

import { SEARCH_MEALS } from '../../actions' 
 

function SearchForm(props) {
    // console.log(str)
    let [searchValue, setSearchValue] = useState('')
    let [isRedirect, setIsRedirect] = useState(false)
    let [isDisabled, setIsDisabled] = useState(true)

    // let value
    let value 
  
    
    useEffect( () => {  
        value = searchValue 
    }, [])

    function onFormSumbit(e) { 
        e.preventDefault() 
        props.context.setSearchString(searchValue)
        searchQuery()
        setIsRedirect(true)  
    }

    function searchQuery() {  
        SEARCH_MEALS(searchValue)
            .then( response => {   
                if(response.meals == null) {   
                    props.context.setSearchResponse([])
                    props.context.setIsEmptySearchAnswer(true)
                }
                else {  
                    props.context.setSearchResponse(response.meals) 
                    props.context.setIsEmptySearchAnswer(false) 
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
