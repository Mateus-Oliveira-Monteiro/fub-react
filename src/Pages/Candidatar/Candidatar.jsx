import React from 'react'
import { Link } from 'react-router-dom'
import './candidatar.css'

function Candidatar() {
  return (
    <div>
        <div class="bloco1">
            <strong>CORTAR GRAMA</strong>
        </div>
        <div class="bloco2">
            Queremos saber mais de você!<br />
            Preencha o seguinte o formulário para a análise do contratante:
        </div>
        <div class="bloco3">
            <div class="questionario">
                <div class="titulo">
                    <strong>QUESTIONÁRIO</strong>
                </div>
                <div class="pergunta">
                    <div class="enunciado">
                        <strong>Você possui experiência para o bico solicitado?</strong>
                    </div>
                    <div class="alternativas">
                        <div class="alternativa">Sim</div>
                        <div class="alternativa">Não</div>
                    </div>
                    <div class="enunciado">
                        <strong>Você possui disponibilidade de horário?</strong>
                    </div>
                    <div class="alternativas">
                        <div class="alternativa">Sim</div>
                        <div class="alternativa">Não</div>
                    </div>
                </div>
            </div>
            <Link to="" class="enviar">
                <strong>Enviar Questionário</strong>
            </Link>
        </div>
    </div>
  )
}

export default Candidatar