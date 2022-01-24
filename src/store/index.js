import React from 'react';

export const defaultStore = {
    noti: {
        status: '',
        text: '',
        active: false
    },
    date: {
        root: ''
    },
    modalSurveys: {
        description: '',
        open: false
    }
};



export const StateContext = React.createContext();
export const DispatchContext = React.createContext();