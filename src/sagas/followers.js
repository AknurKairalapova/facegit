import {
    takeLatest,
    select,
    call,
    put,
    fork
  } from 'redux-saga/effects';
  import {
    fetchFollowersRequest, 
    fetchFollowersSuccess, 
    fetchFollowersFailure
  } from '../actions/followers';
  import {getUserLogin} from '../reducers/users';
  import {getUserFollowers} from '../api';
  
  function* onFetchFollowersRequest() {
    const login = yield select(getUserLogin);
    try {
      const followers = yield call(getUserFollowers, login);
      yield put(fetchFollowersSuccess(followers));
    } catch (error) {
      yield put(fetchFollowersFailure(error));
    }
  }
  
  function* onFetchFollowersWatch() {
    yield takeLatest(fetchFollowersRequest, onFetchFollowersRequest);
  }
  
  export default function*() {
    yield fork(onFetchFollowersWatch);
  }
  