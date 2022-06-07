import React from 'react'
import { useParams } from 'react-router-dom'

const EditCoupon = () => {
    const { id } = useParams();
  return (
    <div>{ id }</div>
  )
}

export default EditCoupon