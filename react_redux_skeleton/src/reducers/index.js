import { combineReducers } from 'redux';

import tweets from './tweets-reducer';
import user from './user-reducer';

export default combineReducers({
    tweets,
    user
});
