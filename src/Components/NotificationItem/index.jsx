import Image from "react-bootstrap/Image";
import './notificationItem.scss';
import {useEffect, useReducer} from "react";

export const NotificationItem = props => {

    const TimeReducer = (state, action) => {

        switch (action.type) {

            case 'INICIALIZA':
                return action.state;

            default:
                return state;

        }

    }

    const INITIAL_STATE = {
        time: 0,
        format: 'min',
    };

    const [timeState, dispatch] = useReducer(TimeReducer, INITIAL_STATE);

    const { image, content, created_at } = props.notification;

    const minutes = Math.floor((Date.now() - new Date(created_at).getTime()) / 1000 / 60)

    useEffect(() => {

        if (minutes >= 60 * 24) {
            dispatch({
                type: 'INICIALIZA',
                state: {
                    time: Math.floor(minutes / 60 / 24),
                    format: 'dias',
                },
            });
        } else if(minutes >= 60) {
            dispatch({
                type: 'INICIALIZA',
                state: {
                    time: Math.floor(minutes / 60),
                    format: 'hrs',
                },
            });
        } else {
            dispatch({
                type: 'INICIALIZA',
                state: {
                    time: minutes,
                    format: 'min',
                },
            });
        }

    }, [])

    useEffect(() => {
        console.log(timeState)
    }, [timeState])

    return (
        <div className={'py-1 row d-flex align-items-center w-100 notification-item'}>
            <span className={'col-1'}>
                <Image src={ image } className={'image'} fluid roundedCircle />
            </span>

            <span className={'col-9'}>
                <div>
                    { content }
                </div>
            </span>

            <span className={'col-2'}>
                { timeState.time } { timeState.format }
            </span>
        </div>
    )

}