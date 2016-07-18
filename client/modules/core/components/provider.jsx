import React from 'react';
import { Provider } from 'react-redux';
import store from 'modules/core/store/configureStore';

export default ({children}) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
