import { createStore } from 'redux';

import reducers from 'modules/core/reducers';

let store = createStore(reducers);

export default store;
