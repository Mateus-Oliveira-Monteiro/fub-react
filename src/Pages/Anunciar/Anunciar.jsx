import React, {useContext, useReducer} from "react";
import {Link, useNavigate} from "react-router-dom"
import "./anunciar.scss";
import logo from '../../Assets/Images/logo.png';
import perfil from '../../Assets/Images/perfil.png';
import img10 from '../../Assets/Images/10.png';
import myaxios from "../../Services/axios";
import {UsuarioContext} from "../../Contexts/UserContext";
import StarRatingComponent from "react-star-rating-component";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";

 
function Anunciar (){

    const { UserState } = useContext(UsuarioContext);
    console.log(UserState)

    const { name, ratings, imagePath, state: userState, city: userCity, district: userDistrict } = UserState;

    let ratingStars = '';
    if (!!ratings && ratings.length !== 0) ratingStars = ratings.reduce((a, b) => a+b) / ratings.length
    else ratingStars = 0
    ratingStars = 3.3

    const navigate = useNavigate();

    const INITIAL_STATE = {
        title: '',
        district: '',
        city: '',
        proposedValue: 0,
        description: ''
    }

    const contractReducer = (state, action) => {

        switch (action.type) {
            case 'ATUALIZA':
                return {
                    ...state,
                    [action.name]: action.value
                }
            default:
                return state;
        }

    }

    const [ contractState, dispatch ] = useReducer(contractReducer, INITIAL_STATE);

    const { title, district, city, proposedValue, description } = contractState;

    const handleChange = (e) => {
        dispatch({
            type: 'ATUALIZA',
            name: e.target.name,
            value: e.target.value
        });
    }

    const handleSubmit = async (e) => {

        e.preventDefault();


        await myaxios.post('/contract', {
            title,
            district,
            city,
            proposedValue,
            description: description ? description : undefined
        })
        .then(response => {
            alert('Registrado com sucesso')
            navigate('/')
        })
        .catch((e) => {
            console.log(contractState);
            alert('Some field is missing')
        })
    }

    return (
        <div id="anunciar">
            <div className="fundo-anunciar">
                <div className="bloco3-anunciar">
                    <div className="contratante">
                        <img src={perfil} />
                        <div className="nome">
                            <strong>{name}</strong>
                        </div>
                        <div className="classificacao d-flex align-items-center gap-2">
                            <StarRatingComponent starColor={'#FAC113'} editing={false} value={ratingStars} emptyStarColor={'transparent'} renderStarIcon={() => <FontAwesomeIcon className={'px-1'} icon={faStar} />} className={'position-static'} />
                            <strong className={'text-warning'}>{ ratingStars }</strong>
                        </div>
                        <div className="localizacao-anunciar">
                            <div className="local">
                                { userState }, { userCity }, { userDistrict }
                            </div>
                        </div>
                    </div>
                    <div className="vaga_form">
                        <div className="pt1">
                            <div className="titulo">
                                <strong>BICO</strong>
                            </div>
                            <input name="title" value={title} className="preencher" onChange={handleChange}/>
                        </div>
                        <div className="pt2">
                            <div className="titulo">
                                <strong>SALARIO</strong>
                            </div>
                            <input step={0.01} type="number" name="proposedValue" value={proposedValue} className="preencher" onChange={handleChange}/>
                        </div>
                        <div className="pt1">
                            <div className="titulo">
                                <strong>BAIRRO</strong>
                            </div>
                            <input name="district" value={district} className="preencher" onChange={handleChange}/>
                        </div>
                        <div className="pt2">
                            <div className="titulo">
                                <strong>CIDADE</strong>
                            </div>
                            <input name="city" value={city} className="preencher" onChange={handleChange} />
                        </div>
                        <div className="descricao-anuciar">
                            <div className="titulo"><strong>DESCRIÇÃO</strong></div>
                            <textarea name="description" value={description} className="desc_preencher px-3 py-2" onChange={handleChange}></textarea>
                        </div>
                    </div>
                    <div className="lembrete">
                        Não se esqueça de especificar com detalhes o serviço solicitado para melhor entendimento
                    </div>
                </div>
                <div className="botoes-anunciar">
                    <Link to="/vagas" ><a className="botao-anunciar">
                        <strong>VOLTAR</strong>
                    </a></Link>
                    <button className="botao-anunciar" onClick={handleSubmit}>
                        <strong>SALVAR</strong>
                    </button>
                </div>
                <img className="imagem"src={img10} />
            </div>
        </div>
    )
}

export default Anunciar;