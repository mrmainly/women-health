import React from 'react';

export const defaultStore = {
    noti: {
        status: '',
        text: '',
        active: false
    },
};



export const StateContext = React.createContext();
export const DispatchContext = React.createContext();