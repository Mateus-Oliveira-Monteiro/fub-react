import React, { useReducer } from "react";
import {Link, useNavigate} from "react-router-dom"
import "./anunciar.scss";
import logo from '../../Assets/Images/logo.png';
import perfil from '../../Assets/Images/perfil.png';
import img10 from '../../Assets/Images/10.png';
import myaxios from "../../Services/axios";

 
function Anunciar (){

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

    const handleChange = (e) => {
        dispatch({
            type: 'ATUALIZA',
            name: e.target.name,
            value: e.target.value
        });
    }

    const handleSubmit = async (e) => {

        e.preventDefault();

        const { title, district, city, proposedValue, description } = contractState;

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
                    <strong>Nome Sobrenome</strong>
                </div>
                <div className="classificacao">
                    classificacao
                </div>
                <div className="localizacao-anunciar">
                    <div className="local">
                    Indaiatuba, São Paulo, Brasil
                    </div>
                </div>
            </div>
            <div className="vaga_form">
                <div className="pt1">
                    <div className="titulo">
                        <strong>BICO</strong>
                    </div>
                    <input name="title" className="preencher" onChange={handleChange}/>
                </div>
                <div className="pt2">
                    <div className="titulo">
                        <strong>SALARIO</strong>
                    </div>
                    <input type="number" name="proposedValue" className="preencher" onChange={handleChange}/>
                </div>
                <div className="pt1">
                    <div className="titulo">
                        <strong>BAIRRO</strong>
                    </div>
                    <input name="district" className="preencher" onChange={handleChange}/>
                </div>
                <div className="pt2">
                    <div className="titulo">
                        <strong>CIDADE</strong>
                    </div>
                    <input name="city" className="preencher" onChange={handleChange} />
                </div>
                <div className="descricao-anuciar">
                    <div className="titulo"><strong>DESCRIÇÃO</strong></div>
                    <textarea name="description" className="desc_preencher" onChange={handleChange}></textarea>
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