import React, {useContext, useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import './bicos_solicitados.css'
import {SolicitedBicks} from "../../Components/SolicitedBicks";
import myaxios from "../../Services/axios";
import {UsuarioContext} from "../../Contexts/UserContext";

function BicosSolicitados() {

    const [contracts, setContracts] = useState(null);

    const { UserState } = useContext(UsuarioContext);

    const getContracts = () => {
        myaxios.get(`/contract`)
            .then(res => setContracts(res.data))
            .catch(err => alert(err))
    }

    useEffect(() => {
        getContracts()
    }, [])

  return (
      <div id={'vagas'}>

          <div id={'header-main'}>

              <div id={'header-bicos'} className={'w-100 d-flex justify-content-center p-2 text-light'}>
                  BICOS SOLICITADOS
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

                  {contracts ? (contracts.filter(contract => contract.employer.id === UserState.id)).map(contract =>
                          <SolicitedBicks vacancy={{
                              service: contract.title ,
                              location: contract.city,
                              budget: contract.proposedValue,
                              id: contract.id,
                              employer: contract.employer.id,
                          }} />)
                      : "Nenhuma vaga encontrada."}

              </div>

          </div>

      </div>
  )
}

export default BicosSolicitados