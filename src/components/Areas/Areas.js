import React , { useEffect , useState} from 'react'

import { GET_AREA_LIST } from '../../actions/actions'

import RenderNumberedList from '../../views/RenderNumberedList'

function Areas() {
    const [data, setData] = useState([]);
 
    useEffect(() => {
        if(data.length === 0 ) fetchAreas() 
    });

    function fetchAreas() { 
        GET_AREA_LIST()
        .then( response => {   
            setData(response.meals)
        }) 
    }
 

    return (
        <div className='container container-styled container-areas '> 
        <h3>Areas</h3>
        <div className='row'>
            <div className='col-12'> 
                <RenderNumberedList data={data} value='strArea' /> 
            </div>
        </div>
    </div>
    )
}

export default Areas
