import React from 'react'
import propTypes from 'prop-types'
export default function Button(props){
    return(
        <button onClick={props.onclick} className={`  py-3 px-6 bg-zinc-900 m-4 rounded-md  ${props.className}`}>
             <h3 className="text-white text-xl">{props.children}</h3>
        </button>
    )
}

