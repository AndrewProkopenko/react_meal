import React from 'react'
import { NavLink } from 'react-router-dom'

function renderAsList(props) {
    return (
       <NavLink 
            to={`${props.link}`} 
            className={`${props.className} row`}   
        > 
            {   props.thumb && 
                <div className='col-auto'>
                    <img src={props.thumb} alt={ props.name } ></img>
                </div>
            }
            <div className='col text-cont'>
                {   props.name &&
                    <h5>
                        { props.name }
                    </h5>
                }
                {    props.desc && 
                    <p>
                        { props.desc }
                    </p>
                }
            </div>  
       </NavLink>
    )
}

export default renderAsList
