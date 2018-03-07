import { createStore, combineReducers } from 'redux';
import articlesReducer from '../reducers/articles';

export default () => {
  const store = createStore(
    combineReducers({
      articles: articlesReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
