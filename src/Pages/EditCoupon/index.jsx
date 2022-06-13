import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import myaxios from '../../Services/myaxios';
import "./editCupom.scss";

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
    <div className={'d-flex flex-column align-items-center px-5 campo-edit-coupon'} >
      <h1 className={'mt-5'}><label htmlFor="deadline">Insira o prazo do seu bico</label></h1>
      <input id="deadline" type="date" className={'mt-3'} onChange={(e) => setDeadline(e.target.value)} />
      <button onClick={(e) => createCoupon} className={'mt-3'} >Criar cupom</button>
    </div>
  )
}

export default EditCoupon