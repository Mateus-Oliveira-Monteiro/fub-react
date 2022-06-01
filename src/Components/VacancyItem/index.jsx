import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-regular-svg-icons/faEye";
import './vacancyItem.scss';
import { Link, useNavigate } from "react-router-dom";

export const VacancyItem = props => {

    const { service, location, budget, id } = props.vacancy;

    const navigate = useNavigate();

    const contractLink = `mais_info/${id}`

    return (
        <div className={'row d-flex align-items-center vacancy px-0'}>
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