import React from "react";

import './avaliacao.scss';
import ImgPerfil from '../../Assets/Images/perfil.png';
import StarRatingComponent from 'react-star-rating-component';

export const Avaliacao = () => {

    return (
        <div id={'avaliacao'}>

            <div className="bloco1">
                <strong>BICOS DISPONÍVEIS</strong>
            </div>
            <div className="bloco2"></div>
            <div className="fundo">
                <div className="bloco3">
                    {/*<div className="avaliador">*/}
                    {/*    <img src={ ImgPerfil } />*/}
                    {/*        <div className="avalia">*/}
                    {/*            <strong>Avaliação de </strong>*/}
                    {/*        </div>*/}
                    {/*        <div className="nome">*/}
                    {/*            <strong>Marta Costa</strong>*/}
                    {/*        </div>*/}
                    {/*        <div className="exclamacao">*/}
                    {/*            <strong>!</strong></div>*/}
                    {/*</div>*/}
                    <div className="avaliacao">
                        <div className="parabens">
                            <strong>PARABÉNS! VOCÊ É UM ÓTIMO TRABALHADOR!</strong>
                        </div>
                        <div className="estrelas">
                            <StarRatingComponent
                                starCount={5}
                                value={3}
                                name={ 'rating' }
                            />
                        </div>
                    </div>
                    <div className="perfil">
                        <div className="foto_perfil">
                            <img src={ ImgPerfil } alt="foto_perfil" />
                        </div>
                        <div className="nome_perfil">
                            <strong>Nome Sobrenome</strong>
                        </div>
                        <div className="classificacao">
                            <StarRatingComponent
                                starCount={5}
                                value={3}
                                name={ 'rating' }
                            />
                        </div>
                        <div className="caracteristicas">
                            17 anos - Estudante
                        </div>
                        <div className="localizacao">
                            Indaiatuba, São Paulo, Brasil
                        </div>
                    </div>

                    <div className="recado">
                        <strong>A sua experiência aumenta a credibilidade do
                            seu perfil! Não se esqueça de atualizar seus bicosprestados
                            no FUB!</strong>
                    </div>
                </div>
            </div>

        </div>
    )

}