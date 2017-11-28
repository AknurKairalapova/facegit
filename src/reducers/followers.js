import {fetchFollowersRequest, fetchFollowersSuccess, fetchFollowersFailure} from '../actions/followers';
import {handleAction, handleActions} from 'redux-actions';
import {combineReducers} from 'redux';


const isFetching = handleActions(
    {
      [fetchFollowersRequest]: () => true,
      [fetchFollowersSuccess]: () => false,
      [fetchFollowersFailure]: () => false
    },
    false
  );
  
  const isFetched = handleActions(
    {
      [fetchFollowersRequest]: () => false,
      [fetchFollowersSuccess]: () => true,
      [fetchFollowersFailure]: () => true
    },
    false
  );

  const ids = handleActions(
    {
      [fetchFollowersRequest]: () => null,
      [fetchFollowersSuccess]: (state, action) => action.payload,
      [fetchFollowersFailure]: () => null
    },
    []
  );

  const error = handleAction (
    {
        [fetchFollowersRequest]: () => null,
        [fetchFollowersSuccess]: () => null,
        [fetchFollowersFailure]: (state, action) => action.error
      },
      null
  );

export default combineReducers({
    isFetching,
    isFetched,
    ids,
    error
});

export const getFollowers = state => state.followers.ids;
export const getIsFetching = state => state.followers.isFetching;
export const getIsFetched = state => state.followers.isFetched;
export const getError = state => state.followers.error;
