import reducers from "./reducers";
import { createStore,compose } from "redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store=createStore(reducers,composeEnhancers())

export default store