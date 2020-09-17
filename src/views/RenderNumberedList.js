import React from 'react'

import { NavLink } from 'react-router-dom'

function RenderNumberedList(props) {
    
    const value = props.value

    // React.useEffect( () => { 
    //     console.log(props)
    // })

    let hideShowClass = props.isHide ? 'hide-item' : 'show-item'
    
    if(!props.data) return '' 
    else return (
        <div>
            <ol>    
                {   props.data.map &&
                    props.data.map( (item, index) => (
                        <li key={index} className={hideShowClass}>
                            <NavLink to={`/area/${item[value]}`}>
                                { item[value]}
                            </NavLink>
                        </li>
                    )) 
                }
            </ol>
        </div>
    )
   
}

export default RenderNumberedList
