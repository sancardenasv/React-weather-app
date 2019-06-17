import { createStore } from "redux";
import { city } from "./../reducers/city";

const initState = {
    city: null
};

export const store = createStore(city, initState,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());