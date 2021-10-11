type User = {
  userName: string;
  userEmail: string;
  userPhone: string;
};

type Action = { type: 'LOGIN_USER'; payload: User } | { type: 'SIGNOUT_USER' };

const defaultState = {
  userName: '',
  userEmail: '',
  userPhone: '',
};

const userReducer = (state = defaultState, action: Action): User => {
  switch (action.type) {
    case 'LOGIN_USER': {
      const newState: User = { ...state };
      newState.userName = action.payload.userName;
      newState.userEmail = action.payload.userEmail;
      newState.userPhone = action.payload.userPhone;

      return newState;
    }
    case 'SIGNOUT_USER': {
      return { ...state };
    }
    default:
      return state;
  }
};

export default userReducer;
