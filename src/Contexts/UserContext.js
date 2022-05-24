import {createContext, useReducer} from "react";

export const UsuarioContext = createContext();

export const UserContext = props => {

    const userReducer = (state, action) => {
        switch (action.type) {

            case 'INICIALIZA':
                return { ...action.state }

            default:
                return state;

        }
    }

    const [ UserState, dispatch ] = useReducer( userReducer, null )

    return (
        <UsuarioContext.Provider value={ {UserState, dispatch} }>
            { props.children }
        </UsuarioContext.Provider>
    )

}