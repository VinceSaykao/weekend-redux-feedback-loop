import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';


// HMM???
// const getFeeling = (state =[], action) => {
//     if (action.type === 'GET_FEELING') {
//         state = { ...state, feeling: action.payload
//         }
//     }
//     return state;
// };

// HMMM 2??
const getFeeling = (state = [], action) => {
    // TODO - set book list with data from server
    if (action.type === 'GET_FEELING') {
        return action.payload.feeling
    }
    return state;
}


// Feeling Reducer 
// const getFeeling = (state = {
//     feeling: [],

//     }, action) => {

//         if (action.type === 'GET_FEELING') {
//             const {feeling} = action.payload;
//             return {
//                 ...state,
//                 feeling: (feeling),
//             }
//         }
//         return state;
//     }



// Understanding Reducer
const getUnderstanding = (state = {
    understanding: [],

}, action) => {

    if (action.type === 'GET_UNDERSTANDING') {
        const { understanding } = action.payload;
        return {
            ...state,
            understanding: (understanding),
        }
    }
    return state;
}

// Supported Reducer
const getSupported = (state = {
    supported: [],

}, action) => {

    if (action.type === 'GET_SUPPORTED') {
        const { supported } = action.payload;
        return {
            ...state,
            supported: (supported),
        }
    }
    return state;
}

// Comments Reducer
const getComments = (state = {
    comments: ('None'),

}, action) => {

    if (action.type === 'GET_COMMENTS') {
        const { comments } = action.payload;
        return {
            ...state,
            comments: comments,
        }
    }
    return state;
}

// simplified 
const feedbackReducers = combineReducers({
    feeling: getFeeling,
    understanding: getUnderstanding,
    supported: getSupported,
    comment: getComments,
});



// Store to hold all reducers
const storeData = createStore(
    combineReducers({
        getFeeling,
        getUnderstanding,
        getSupported,
        getComments,
    }),
    applyMiddleware(logger)
)

ReactDOM.render(
    <Provider store={storeData}>
        <App />
    </Provider>
    ,
    document.getElementById('root')
);

registerServiceWorker();
