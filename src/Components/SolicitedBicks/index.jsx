import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-regular-svg-icons/faEye";
import './solicitedBicks.scss';
import { Link, useNavigate } from "react-router-dom";

export const SolicitedBicks = props => {

    const { service, location, budget, id, employer } = props.vacancy;

    const navigate = useNavigate();

    const contractLink = `/candidatos/${id}`

    return (
        <div className={'row d-flex align-items-center vacancySolicited px-0'}>
            <span className={'col-3 py-2'}>
                { service }
            </span>

            <span className={'col-3 py-2'}>
                { location }
            </span>

            <span className={'col-3 py-2'}>
                R$ { budget.toFixed(2).toString().replace('.', ",") }
            </span>

            <button className={'offset-1 col-2 py-2 border-0'} onClick = {(e) => navigate(contractLink)}>
                <FontAwesomeIcon icon={faEye} size={'2x'} color={'gray'} />
            </button>
        </div>
    )

}