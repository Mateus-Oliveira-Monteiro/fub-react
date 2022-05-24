import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-regular-svg-icons/faEye";
import './contractItem.scss';

export const contractItem = props => {

    const { service, location, budget } = props.vacancy;

    return (
        <div className={'row d-flex align-items-center vacancy px-0'}>
            <span className={'col-3 py-2'}>
                { service }
            </span>

            <span className={'col-3 py-2'}>
                { location }
            </span>

            <span className={'col-3 py-2'}>
                R$ { budget }
            </span>

            <button className={'offset-1 col-2 py-2 border-0 bg-opacity-50'}>
                <FontAwesomeIcon icon={faEye} size={'2x'} color={'white'} />
            </button>
        </div>
    )

}