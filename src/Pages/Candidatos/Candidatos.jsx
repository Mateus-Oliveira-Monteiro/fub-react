import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom"
import "./candidatos.scss";
import {InterestedEmployee} from "../../Components/InterestedEmployee";
import myaxios from "../../Services/axios";


 
const Candidatos = props => {

    const { id } = useParams();

    const [contract, setContract] = useState({
        title: '',
        description: '',
        proposedValue: '',
        interested: '',
        statusContract: '',
        employer: '',
    });

    const { title, description, proposedValue, interested, statusContract, employer, employee } = contract;

    const getContract = () => {
        myaxios.get(`/contract/${id}`)
            .then(res => setContract(res.data))
            .catch(err => alert(err))
    }

    const handleEmploy = (interestedId) => {
        myaxios.put(`/contract/select/${id}/employee/${interestedId}`)
        .then(res => alert(res))
        .catch((error) => alert(error))
    }

    useEffect(() => {
        getContract()
    }, [])

    useEffect(() => {
        console.log(interested)
    }, [interested])

    return (
        <div id={'candidatos'} className={''}>

            <main className={'w-100 p-5'}>

                <section className={'row'}>
                    <div className={'col-8 d-flex flex-column gap-3'}>
                        <h1>{ title }</h1>
                        <p>{ description }</p>
                        <div className={'d-flex flex-row align-items-center gap-4'}>
                            <span>
                                Salário:
                            </span>
                            <span>
                                R$ { proposedValue }
                            </span>
                        </div>
                    </div>
                </section>

                <section>
                    <span>Interessados</span>
                    {
                        !!interested ?
                            interested.map(interested => interested.id === employee.id ||
                            <InterestedEmployee contract={id} interested={interested.id} />)
                        :
                            "Não há interessados"
                    }
                    {
                        employee ?
                            <>
                                <span>Contratado</span>
                                <InterestedEmployee contract={id} interested={employee.id} />
                            </>
                        :
                            "Não há interessados"
                    }
                </section>

            </main>

        </div>
    )
}

export default Candidatos;