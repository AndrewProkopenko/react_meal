import React from 'react'


import App from './App';
import AppContext from './context/AppContext'

function ContForContext() {
     

    return (
        <AppContext.Consumer> 
            {
                context => (
                    <App context={context} /> 
                )
            }
        
        </AppContext.Consumer> 
    )
}

export default ContForContext
