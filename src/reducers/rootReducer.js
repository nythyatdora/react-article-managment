import { combineReducers } from 'redux';
import { articleReducer } from './articleReducer';

export const rootReducer = combineReducers(
    {
        articleR: articleReducer,
    }
);