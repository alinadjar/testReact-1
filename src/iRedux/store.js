import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from './Reducers';
import thunk from "redux-thunk";

const middlewares = [thunk];

const initialState = {};

const store = createStore(
    rootReducer,
    initialState,
    //applyMiddleware(...middlewares)
    compose(applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()    )
);


export default store;