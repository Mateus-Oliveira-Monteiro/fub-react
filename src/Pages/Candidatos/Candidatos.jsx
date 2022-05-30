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

    const { title, description, proposedValue, interested, statusContract, employer } = contract;

    const getContract = () => {
        myaxios.get(`/contract/${id}`)
            .then(res => setContract(res.data))
            .catch(err => alert(err))
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
                    {
                        !!interested ?
                            interested.map(interested => <InterestedEmployee interested={interested.id} />)
                        :
                            null
                    }
                </section>

            </main>

        </div>
    )
}

export default Candidatos;