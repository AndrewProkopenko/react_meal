import React, { Component } from 'react'

import App from './App';
import AppContext from './context/AppContext'

export default class ContForContext extends Component {
    render() {
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
}
