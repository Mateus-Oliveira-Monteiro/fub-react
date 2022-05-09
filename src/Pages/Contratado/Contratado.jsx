import React from "react";
import {Link} from "react-router-dom"
import "./contratado.css";
import logo from '../../Assets/Images/logo.png';


 
function Contratado (){
    return (
        <>
           <div class="bloco1-contratado">
               <strong>FAZENDO UM BICO</strong>
            </div>
            <div class="bloco2-contratado">
                <div class="esquerda">
                    <div class="vaga">
                        <strong>Cortar a grama</strong><br /><br />
                        Procuro alguém com experiência para
                        cortar a grama do meu jardim. Já possuo as
                        ferramentas, sendo que necessito somente
                        de mão de obra, pois recentemente quebrei
                        as pernas, e estou morando sozinho.
                    </div>
                    <div class="salario-contratado">
                        Salário: <strong>R$ 40,00</strong>
                    </div>
                </div>
                <div class="direita-contratado">
                    <div class="direita_bloco-contratado">
                        <div class="perfil-contratado">
                            <img src="perfil.png" />
                            <div class="nome-contratado">
                                <strong>Bruno Barreto</strong>
                            </div>
                            <div class="classificacao-contratado"></div>
                        </div>
                        <div class="local">
                            <img src="" />
                            <div class="localizacao-contratado">
                                    <strong>Colinas de Indaiatuba<br />
                                    Indaiatuba - SP </strong>
                            </div>
                        </div>
                        <div class="telefone">
                            <img src="" />
                            <div class="numero">
                                <strong>(19) 99384-7556</strong>
                            </div>
                        </div>
                        <div class="whatsapp">
                            <img src="" />
                            <div class="entre_em_contato">
                                <strong>Clique aqui e entre em contato
                                        pelo WhatsAppp! </strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bloco3-contratado">
                <img src="" />
                <div class="recado">
                    <div class="titulo-contratado">
                        <strong>Comece a trabalhar agora!</strong>
                    </div>
                    <div class="texto-contratado">
                        <strong>Entre em contato com o seu contratante para o acerto
                        de mais detalhes do serviço, local e horário para a
                        realização do seu bico</strong>
                    </div>
                </div>
            </div>
    </>
)
}

export default Contratado;