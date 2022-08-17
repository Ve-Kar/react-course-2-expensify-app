import { createStore, combineReducers, applyMiddleware,  } from "redux";
import thunk from 'redux-thunk'; 
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import authReducer from '../reducers/auth';


//import { compose } from "redux";

// To preserve redux functionality 

const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Store creation

 export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer,
            auth: authReducer
            }),
       composeEnhacers(applyMiddleware(thunk))
    );
    
    return store;
 };
 