import {applyMiddleware, combineReducers, compose, createStore} from "redux"
import thunkMiddleware from "redux-thunk"
import FilterReducer from "./filter-reducer";
import CatalogReducer from "./catalog-reducer";

let rootReducer = combineReducers({
    filterPage: FilterReducer,
    catalogPage: CatalogReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

window._store = store

export default store