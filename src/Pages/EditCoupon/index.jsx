import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import myaxios from '../../Services/myaxios';

const EditCoupon = () => {
    const { id } = useParams();
    const [deadline, setDeadline] = useState(null)
    const [value, setValue] = useState(null)

    let couponState = { value: value, deadline: deadline }

    const navigate = useNavigate();

    const getProposedValue = () => {
      myaxios.get(`/contract/${id}`)
      .then(res => setValue(res.data.proposedValue))
    }

    const createCoupon = () => {
      myaxios.post(`/contract/${id}`, couponState)
      .then(res => {
        alert(res)
        navigate(`/candidatos/${id}`)
      .catch((e) => alert(e))
      })
    }

    useEffect(() => {
      getProposedValue();
    }, [])
    

  return (
    <div>
      <input type="date" onChange={(e) => setDeadline(e.target.value)} />
      {value ? <span>{ value }</span> : "cu"}
      <button onClick={(e) => createCoupon}>Criar cupom</button>
    </div>
  )
}

export default EditCoupon