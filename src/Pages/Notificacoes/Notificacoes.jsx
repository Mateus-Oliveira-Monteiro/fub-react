import React from 'react';
import "./notificacoes.scss";
import {NotificationItem} from "../../Components/NotificationItem";


function Notificacoes() {
    return(
        <div id={'notifications'}>
            <div id={'notification-header'} className={'d-flex justify-content-center align-items-center flex-column w-100 py-3'}>
                NOTIFICAÇÕES
            </div>

            <div id={'notification-main'} className={'p-4 d-flex justify-content-center'}>

                <figure id={'list-notifications'} className={'w-75 bg-light d-flex flex-column gap-2 px-5 py-2'}>

                    <NotificationItem notification={{
                        image: 'data:image/png;base64,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',
                        title: 'Titulo muito criativo hahahaha mt engrazado rs ri d+ lol',
                        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lobortis, ex sed congue blandit, ipsum ligula convallis dui, eget euismod sapien felis ac sem. Duis aliquam erat vitae tortor convallis, ',
                        created_at: '2022-05-20T14:05:39.020Z',

                    }} />
                    <NotificationItem notification={{
                        image: 'data:image/png;base64,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',
                        title: 'Titulo muito criativo hahahaha mt engrazado rs ri d+ lol',
                        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lobortis, ex sed congue blandit, ipsum ligula convallis dui, eget euismod sapien felis ac sem. Duis aliquam erat vitae tortor convallis, ',
                        created_at: '2022-05-20T14:05:39.020Z',

                    }} />
                    <NotificationItem notification={{
                        image: 'data:image/png;base64,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',
                        title: 'Titulo muito criativo hahahaha mt engrazado rs ri d+ lol',
                        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lobortis, ex sed congue blandit, ipsum ligula convallis dui, eget euismod sapien felis ac sem. Duis aliquam erat vitae tortor convallis, ',
                        created_at: '2022-05-20T14:05:39.020Z',

                    }} />

                </figure>

            </div>
        </div>
    )
}
export default Notificacoes;