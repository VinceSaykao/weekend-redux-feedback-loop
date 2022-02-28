import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';


// HMM???
// const getFeeling = (state =[], action) => {
//     if (action.type === 'GET_FEELING') {
//         return {
//             ...state,
//             feeling: action.payload
//         }
//     }
//     return state;
// }



const getFeeling = (state = {
    feeling: [],
    
    }, action) => {
        
        if (action.type === 'GET_FEELING') {
            const {feeling} = action.payload;
            return {
                ...state,
                feeling: (feeling),
            }
        }
        return state;
    }




const getUnderstanding = (state = {
    understanding: [],
    
    }, action) => {
        
        if (action.type === 'GET_UNDERSTANDING') {
            const {understanding} = action.payload;
            return {
                ...state,
                understanding: (understanding),
            }
        }
        return state;
    }

    const getSupported = (state = {
        supported: [],
        
        }, action) => {
            
            if (action.type === 'GET_SUPPORTED') {
                const {supported} = action.payload;
                return {
                    ...state,
                    supported: (supported),
                }
            }
            return state;
        }

        const getComments = (state = {
            comments: ('None'),
            
            }, action) => {
                
                if (action.type === 'GET_COMMENTS') {
                    const {comments} = action.payload;
                    return {
                        ...state,
                        comments: comments,
                    }
                }
                return state;
            }




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
