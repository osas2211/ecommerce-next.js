import React from 'react'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Rating({rating_value}) {
    if (rating_value === 0 || rating_value === undefined ) return <></>
    else if (rating_value === 1) return <FontAwesomeIcon icon={faStar}/>
    else if (rating_value === 2) return <><FontAwesomeIcon icon={faStar}/> <FontAwesomeIcon icon={faStar}/></>
    else if (rating_value === 3){
        return (
            <>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
            </>
        )
    }
    else if (rating_value === 4){
        return (
            <>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
            </>
        )
    }
  return (
    <>
        <FontAwesomeIcon icon={faStar}/>
        <FontAwesomeIcon icon={faStar}/>
        <FontAwesomeIcon icon={faStar}/>
        <FontAwesomeIcon icon={faStar}/>
        <FontAwesomeIcon icon={faStar}/>
    </>
  )
}
