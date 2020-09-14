import React , { useEffect , useState} from 'react'
import { NavLink } from 'react-router-dom'

import { GET_AREA_LIST } from '../../actions'

function Areas() {
    const [data, setData] = useState([]);
 
    useEffect(() => {
        if(data.length === 0 ) fetchAreas() 
    });

    function fetchAreas() { 
        GET_AREA_LIST()
        .then( response => {  
            // console.log(response)
            setData(response.meals)
        }) 
    }

    function renderAreas() { 
        return (
            data.map( (item, index) => (
                <li key={index}>
                    <NavLink to={`/area/${item.strArea}`}>
                        { item.strArea}
                    </NavLink>
                </li>
            )) 
        )
    }

    return (
        <div className='container container-styled container-areas '> 
        <h3>Areas</h3>
        <div className='row'>
            <div className='col-12'>
                <ol>
                    { renderAreas() }
                </ol>
            </div>
        </div>
    </div>
    )
}

export default Areas
