import { combineReducers } from 'redux';
import coursesReducer from './courseReducer';
import articlesReducer from './articleReducer'

const rootReducer = combineReducers({
  courses: coursesReducer,
  articles: articlesReducer
});

export default rootReducer;