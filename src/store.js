import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';

export default (initialState) => {
  const enhancers = composeWithDevTools(applyMiddleware(thunk));
  const store = createStore(reducers, initialState, enhancers);

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(require('./reducers').default);
    });
  }

  return store;
};
