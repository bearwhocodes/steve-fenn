import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import articlesReducer from '../reducers/articles';

export default initialState => {
  const finalCreateStore = compose(
    applyMiddleware(promise),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )(createStore);

  const reducer = combineReducers({
    articles: articlesReducer
  });

  const store = finalCreateStore(reducer, initialState);

  return store;
};
