import { createStore, compose, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import articlesReducer from '../reducers/articles';

export default initialState => {
  const finalCreateStore = compose(
    applyMiddleware(promise),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )(createStore);

  const store = finalCreateStore(articlesReducer, initialState);

  return store;
};
