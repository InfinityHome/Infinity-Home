import { createStore } from 'redux';

import reducers from './reducers/index';

const store = createStore(reducers)

export default store

/** dispatch({
              type: 'LOGIN_USER',
              payload: {
                userName: name,
                userEmail: user.email,
                userPhone: phone,
              },
            }); */