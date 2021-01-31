import rootReducer from "./reducers/index"
import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"


const composeEnhancers =(process.env.NODE_ENV === "development" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ )|| compose;
const enhancers = composeEnhancers(applyMiddleware(thunk));


export function configureStore() {
    return createStore(
        rootReducer,
        enhancers
    )

}