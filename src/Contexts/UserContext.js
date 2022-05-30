import {createContext, useReducer} from "react";

export const UsuarioContext = createContext({});

export const UserProvider = props => {

    const userReducer = (state, action) => {
        switch (action.type) {

            case 'INICIALIZA':
                return { ...action.state }

            default:
                return state;

        }
    }

    const INITIAL_STATE = {
        name: null,
        ratings: null,
        birthDate: null,
        occupation: null,
        city: null,
        state: null,
        district: null,
        description: null,
        imagePath: null,
    }

    const [ UserState, dispatch ] = useReducer( userReducer, INITIAL_STATE )

    return (
        <UsuarioContext.Provider value={ {UserState, dispatch} }>
            { props.children }
        </UsuarioContext.Provider>
    )

}