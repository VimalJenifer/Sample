import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    form: formReducer,
    // todos: todos    
});
export default rootReducer;