import React from 'react'
import { Link } from 'react-router-dom'
import './bicos_solicitados.css'

function BicosSolicitados() {
  return (
    <div>
        <div class="bloco1">
            <strong>BICOS DISPONÍVEIS</strong>
        </div>
        <div class="bloco2">
            <div class="campos">
                <strong>Campos</strong>
            </div>
            <div class="busque">
                <strong>Busque por Bicos</strong>
            </div>
        </div>
        <div class="fundo">
            <div class="vagas">
                <div class="informações">
                    <div class="info">
                        <strong>SERVIÇO</strong>
                    </div>
                    <div class="info">
                        <strong>LOCALIZAÇÃO</strong>
                    </div>
                    <div class="info">
                        <strong>SALÁRIO</strong>
                    </div>
                    <div class="vazio">
                    </div>
                </div>
                <Link to="" class="vaga">
                    <div class="desc_da_vaga">
                        <strong>Reforço de Português</strong>
                    </div>
                    <div class="local_da_vaga">
                        <strong>Indaitatuba-SP</strong>
                    </div>
                    <div class="preco_da_vaga">
                        <strong>30.00</strong>
                    </div>
                </Link>
                <div class="espaco"></div>
                <Link to="" class="vaga">
                    <div class="desc_da_vaga">
                        <strong>Cortar a grama</strong>
                    </div>
                    <div class="local_da_vaga">
                        <strong>Indaitatuba-SP</strong>
                    </div>
                    <div class="preco_da_vaga">
                        <strong>40.00</strong>
                    </div>
                </Link>
                <div class="espaco"></div>
                <Link to="" class="vaga">
                    <div class="desc_da_vaga">
                        <strong>Babá</strong>
                    </div>
                    <div class="local_da_vaga">
                        <strong>Indaitatuba-SP</strong>
                    </div>
                    <div class="preco_da_vaga">
                        <strong>15.00</strong>
                    </div>
                </Link>
                <div class="espaco"></div>
            </div>
        </div>

    </div>
  )
}

export default BicosSolicitados