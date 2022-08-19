import React from 'react'
import Thanks from '../Thanks'
import WalmartForm from './WalmartForm'
import WalmartSettings from './WalmartSettings'

const Walmart = (props) => {
   
    console.log(props)
    
  return (
   <>
   {props.stepOne && <WalmartForm/>}
   {props.stepTwo && <WalmartSettings/>}
   {props.stepThree && <Thanks/>}
   </>
  )
}

export default Walmart