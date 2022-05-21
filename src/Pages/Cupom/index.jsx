import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import myaxios from "../../Services/axios";
import './cupom.css'

const Cupom = () => {
    const { id } = useParams();
    const [ coupon, setCoupon ] = useState('');
    const [contract, setContract] = useState(null)

    const getCoupon = () => {
        myaxios.get(`/coupon/${id}`)
            .then(res => setCoupon(res.data))
            .catch((error) => alert(error))
    }

    
    useEffect(() => {
        getCoupon();
    }, [])
    
    const contractId = coupon.contract.id

    const getContract = () => {
        myaxios.get(`/contract/${contractId}`)
            .then(res => setContract(res.data))
            .catch((error) => alert(error))
    }

    useEffect(() => {
        getContract();
    }, [])

    const deadlineDate = new Date(coupon.deadline);
    const format = deadlineDate.toLocaleDateString("pt-br", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    })

    return (
        <div>
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
                    Bico: {coupon.contract.title}
                </div>
                <div className="cupom-detalhes">
                    Contratante: {contract.employer.name}
                </div>
                <div className="cupom-detalhes">
                    Contratado: {contract.employer.name}
                </div>
                <div className="cupom-detalhes">
                    Preço: {coupon.value}
                </div>
                <div className="cupom-detalhes">
                    Prazo: { format }
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
        </div>
    )
}

export default Cupom
