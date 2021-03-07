import {applyMiddleware, combineReducers, compose, createStore} from "redux"
import thunkMiddleware from "redux-thunk"
import FilterReducer from "./filter-reducers";

let rootReducer = combineReducers({
    filterPage: FilterReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

window._store = store

export default store