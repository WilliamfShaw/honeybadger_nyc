import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import tweets from './tweets-reducer';
import user from './user-reducer';
import cookies from './cookie-reducer';

export default combineReducers({
    tweets,
    user,
    cookies,
    form: formReducer
});
