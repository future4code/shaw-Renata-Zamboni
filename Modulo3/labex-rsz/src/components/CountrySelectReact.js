import React, {useState} from "react";

import CountrySelect from 'react-bootstrap-country-select';


export const CountrySelectReact=()=>{

    const [pais, setPais] = useState([])

    return(
        <CountrySelect value={pais} onChange={setPais}/>
    );
}  