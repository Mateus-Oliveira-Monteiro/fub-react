import React, { useContext, useState, useEffect } from "react";
import "./vagas.scss";
import myaxios from "../../Services/axios";
import {VacancyItem} from "../../Components/VacancyItem";

function Vagas() {

    const [contracts, setContracts] = useState(null);

    const getContracts = () => {
        myaxios.get(`/contract`)
        .then(res => setContracts(res.data))
        .catch((err) => alert(err))
    }

    useEffect(() => {
        getContracts()
    }, [])
    
    return (

        <div id={'vagas'}>

            <div id={'header-main'}>

                <div id={'header-bicos'} className={'w-100 d-flex justify-content-center p-2'}>
                    BICOS DISPONÍVEIS
                </div>

            </div>

            <div id={'content'} className={'p-5'}>

                <div id={'list-vagas'} className={'row d-flex flex-column gap-2 bg-light align-items-center pb-5'}>

                    <div className={'row pt-4 pb-2'}>
                        <span className={'col-3'}>
                            SERVIÇOS
                        </span>

                        <span className={'col-3'}>
                            LOCALIZAÇÃO
                        </span>

                        <span className={'col-3'}>
                            SALÁRIO
                        </span>
                    </div>

                    {contracts ? contracts.map(contract => 
                        <VacancyItem vacancy={{
                            service: contract.title ,
                            location: contract.city,
                            budget: contract.proposedValue,
                            id: contract.id
                        }} />)
                     : "Nenhuma vaga encontrada."}

                </div>

            </div>

        </div>

    )
}

export default Vagas;
