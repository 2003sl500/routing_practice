import React from 'react'
import { useParams } from 'react-router'

const BaseRoute = () => {
   
    const {first, second, third} = useParams('')
    var firstP = ""
    console.log("first is: ", first)
    console.log("second is: ", second)
    console.log("third is: ", third)

    if(isNaN(first)){
        firstP = 'word'
    } else {
        firstP = 'number'
    }


    return (
        <div style={{marginTop: '30px'}}>
           <h1 style={{display: 'inline', background: third}}>The {firstP} is: </h1>
           <h1 style={{display: 'inline', color: second, background: third}}>{first}</h1>
        </div>
    )
}

export default BaseRoute