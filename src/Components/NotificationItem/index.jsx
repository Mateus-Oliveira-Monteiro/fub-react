import Image from "react-bootstrap/Image";
import './notificationItem.scss';

export const NotificationItem = props => {

    const { image, title, content, created_at } = props.notification

    const minutes = Math.floor((Date.now() - new Date(created_at).getTime()) / 1000 / 60)

    return (
        <div className={'py-1 row d-flex align-items-center w-100 notification-item'}>
            <span className={'col-1'}>
                <Image src={ image } className={'image'} fluid roundedCircle />
            </span>

            <span className={'col-9'}>
                <div style={{'color': 'orange', 'font-weight': '500'}}>
                    { title }
                </div>

                <div>
                    { content }
                </div>
            </span>

            <span className={'col-2 text-warning'}>
                { minutes } min
            </span>
        </div>
    )

}