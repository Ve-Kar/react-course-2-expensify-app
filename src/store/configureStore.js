import { createStore, combineReducers, applyMiddleware,  } from "redux";
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import thunk from 'redux-thunk'; 
import { compose } from "redux";

// To preserve redux functionality 

const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//Store creation 
 export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer
        }),
       composeEnhacers(applyMiddleware(thunk))
    );
    
    return store;
 };
 