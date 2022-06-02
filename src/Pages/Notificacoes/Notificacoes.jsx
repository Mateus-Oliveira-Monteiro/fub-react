import React, {useEffect, useState} from 'react';
import "./notificacoes.scss";
import {NotificationItem} from "../../Components/NotificationItem";
import perfil from '../../Assets/Images/perfil.png';
import myaxios from '../../Services/axios';


function Notificacoes() {



    const [notifications, setNotifications] = useState([]);

    const getNotifications = () => {
        myaxios.get(`/notification`)
        .then(res => setNotifications(res.data.sort((a, b) => (a.createdAt > b.createdAt) ? -1 : 1)))
        .catch((err) => alert(err))
    }

    useEffect(() => {
        getNotifications();
    }, [])

    useEffect(() => {
        console.log(notifications)
    }, [notifications])

    return(
        <div id={'notifications'}>
            <div id={'notification-header'} className={'d-flex justify-content-center align-items-center flex-column w-100 py-3'}>
                NOTIFICAÇÕES
            </div>

            <div id={'notification-main'} className={'p-4 d-flex justify-content-center'}>

                <figure id={'list-notifications'} className={'w-75 bg-light d-flex flex-column gap-2 px-5 py-2'}>

                    {
                        notifications ?
                            notifications.map(notification =>
                                <NotificationItem notification={{
                                    image: perfil,
                                    content: notification.content,
                                    created_at: notification.createdAt,
                                }} />
                            )
                        :
                            'null'
                    }


                </figure>

            </div>
        </div>
    )
}
export default Notificacoes;