import {connectRouter} from 'connected-react-router';
import {combineReducers} from 'redux'
import board from './BoardPage/reducer'
import auth from "./AuthPage/reducer";
import column from "./Column/reducer";
import task from "./Task/reducer";

export default (history) =>
    combineReducers({
        router: connectRouter(history),
        board,
        auth,
        column,
        task,
    });
