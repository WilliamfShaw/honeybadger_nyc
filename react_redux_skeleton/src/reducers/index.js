import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import tweets from './tweets-reducer';
import user from './user-reducer';

export default combineReducers({
    tweets,
    user,
    form: formReducer
});
