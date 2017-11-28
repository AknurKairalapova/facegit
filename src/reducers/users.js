import {fetchUserRequest, fetchUserSuccess, fetchUserFailure} from '../actions/users';
import {handleAction, handleActions} from 'redux-actions';
import {combineReducers} from 'redux';


const isFetching = handleActions(
    {
      [fetchUserRequest]: () => true,
      [fetchUserSuccess]: () => false,
      [fetchUserFailure]: () => false
    },
    false
  );
  
  const isFetched = handleActions(
    {
      [fetchUserRequest]: () => false,
      [fetchUserSuccess]: () => true,
      [fetchUserFailure]: () => true
    },
    false
  );

  const data = handleActions(
    {
      [fetchUserRequest]: () => null,
      [fetchUserSuccess]: (state, action) => action.payload,
      [fetchUserFailure]: () => null
    },
    null
  );

  const error = handleAction (
    {
        [fetchUserRequest]: () => null,
        [fetchUserSuccess]: () => null,
        [fetchUserFailure]: (state, action) => action.error
      },
      null
  );

export default combineReducers({
    isFetching,
    isFetched,
    data,
    error
});

export const getUserLogin = state => state.user.data.login;
export const getUserData = state => state.user.data;
export const getIsFetching = state => state.user.isFetching;
export const getIsFetched = state => state.user.isFetched;
export const getError = state => state.user.error;
