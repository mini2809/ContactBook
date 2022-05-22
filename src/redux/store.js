import { applyMiddleware, combineReducers } from "redux";
import { createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import contactReducer from "./reducers";
import mySaga from "./sagas/saga";

const rootreducer = combineReducers({ contactReducer });
const sagamiddleware = createSagaMiddleware();

let store = createStore(rootreducer, applyMiddleware(sagamiddleware));
sagamiddleware.run(mySaga);
export default store;
