import React from "react";
import {Link} from "react-router-dom"
import "./vagas.scss";
import logo from '../../Assets/Images/logo.png'
import {Container} from "react-bootstrap";
import {VacancyItem} from "../../Components/VacancyItem";

function Vagas() {
    return (

        <div id={'vagas'}>

            <div id={'header-main'}>

                <div id={'header-bicos'} className={'w-100 d-flex justify-content-center p-2 text-light'}>
                    BICOS DISPONÍVEIS
                </div>

                <div id={'search'} className={'d-flex p-2 row'} >
                    <input className={'mx-5 col-3 border-0 px-4 text-secondary'} placeholder={'Busque por Bicos'} />
                </div>

            </div>

            <div id={'content'} className={'bg-dark p-5'}>

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

                    <VacancyItem vacancy={{
                        service: 'Liver',
                        location: 'Itaperacininga da Serra',
                        budget: 1_500
                    }} />

                    <VacancyItem vacancy={{
                        service: 'Serviço2',
                        location: 'Araçapuca da Terra',
                        budget: 3_000
                    }} />

                </div>

            </div>

        </div>

    )
}

export default Vagas;
