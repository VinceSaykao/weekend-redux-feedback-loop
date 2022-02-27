import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';

const getFeeling = (state = {
    feeling: [],
    
    }, action) => {
        
        if (action.type === 'GET_FEELING') {
            const {feeling} = action.payload;
            return {
                ...state,
                feeling: Number(feeling),
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
                understanding: Number(understanding),
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
                    supported: Number(supported),
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
