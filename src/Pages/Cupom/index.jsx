import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import myaxios from "../../Services/axios";
import './cupom.css'
import Moment from 'react-moment';

const Cupom = () => {
    const { id } = useParams();
    const [ coupon, setCoupon ] = useState(null);
    const [contract, setContract] = useState(null)

    const getCoupon = () => {
        myaxios.get(`/coupon/contract/${id}`)
            .then(res => setCoupon(res.data[0]))
            .catch((error) => alert(error))
        myaxios.get(`/contract/${id}`)
            .then(res => setContract(res.data))
            .catch((error) => alert(error))
    }

    useEffect(() => {
        getCoupon();
    }, [])

    return (
        <div>
            { !!coupon ?
    <div className="cupom-fundo">
        <div className="cupom-dica">
            O cupom abaixo são os dados oficiais dos andamento do seu bico, 
            use-o como comprovante para apresentá-lo
            ao seu contratado:
        </div>
        <div className="cupom-cupom">
            <div className="cupom-titulo">
                <strong>Cupom FUB</strong>
            </div>
            <div className="cupom-status">
                Status: {coupon.isFinished ? "Finalizado" : "Pendente"}
            </div>
            <div className="cupom-sobre">
                <div className="cupom-detalhes">
                    Bico: {contract.title}
                </div>
                <div className="cupom-detalhes">
                    Contratante: {contract.employer.name}
                </div>
                <div className="cupom-detalhes">
                    Contratado: {contract.employee.name}
                </div>
                <div className="cupom-detalhes">
                    Preço: { coupon.value.toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' }) }
                </div>
                <div className="cupom-detalhes">
                    Prazo: <Moment date={coupon.deadline} format="DD/MM/YYYY" />
                </div>
            </div>
        </div>
        <div className="cupom-espaco">

        </div>
        <a href="" className="cupom-botao">
            <strong>EXCLUIR CUPOM</strong>
        </a>
        <a href="" className="cupom-botao">
            <strong>FINALIZAR CUPOM</strong>
        </a>
    </div>
    : "carregando" }
        </div>
    )
}

export default Cupom
