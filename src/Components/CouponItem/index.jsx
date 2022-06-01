import React from 'react'

export const CouponItem = props => {

    const { title, employer, employee, budget, deadline } = props.coupon;

    return (
        <div>
            <span>
                Bico: { title }
            </span>
            <span>
                Contratante: { employer }
            </span>
            <span>
                Contratado: { employee }
            </span>
            <span>
                Recompensa: { budget }
            </span>
            <span>
                Prazo: { deadline }
            </span>
        </div>
    )
}