import React, { createContext, useContext, useReducer } from 'react';
import { settingsState, settingsReducer } from './settingsState';

export const StateContext = createContext();

export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

export const useGlobalStore = () => useContext(StateContext);

export const reducer = (state, action) => {
    switch (action.type) {
        //CORE
        case 'SET_COUNTER_INCREASE':
            return( {...state,
                counter : action.payload}
                )
        case 'SET_WELCOMEPAGE_COUNTER_INCREASE':
            return( {...state,
                welcomePage : { counter: action.payload}}
            )
        //SETTINGS
        case 'SET_CURRENT_SCREEN':
            return( {...state,
                    settings: {language: state.settings.language, activePage: action.payload}}
            )
        case 'SET_LANGUAGE':
            return( {...state,
                    language: action.payload}
            )
        //MYCART
        case 'SET_SCROLLBAR_MOVEY':
                return( {...state,
                        myCart: {
                            itemList: state.myCart.itemList,
                            totalCost: state.myCart.totalCost,
                            selectedItem: state.myCart.selectedItem,
                            scrollbarMoveY: action.payload
                        }}
                )
        default:
            return state
    }
}


const initialState = {
    myCart: {
        itemList: [{}],
        totalCost: 0,
        selectedItem: {},
        scrollbarMoveY: 0,
    },
    teamMember: {
        itemSearch: ''
    },
    welcomePage: {
        counter: 0
    },
    counter: 0
}

export const fullState = {
    ...initialState,
    ...settingsState
}