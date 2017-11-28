import {
    takeLatest,
    select,
    call,
    put,
    fork
  } from 'redux-saga/effects';
  import {
    fetchUserRequest, 
    fetchUserSuccess, 
    fetchUserFailure
  } from '../actions/users';
  import {getUserLogin} from '../reducers/users';
  import {getUserInformation} from '../api';
  
  function* onFetchUserRequest() {
    const login = yield select(getUserLogin);
    try {
      const user = yield call(getUserInformation, login);
      yield put(fetchUserSuccess(user));
    } catch (error) {
      yield put(fetchUserFailure(error));
    }
  }
  
  function* onFetchUserWatch() {
    yield takeLatest(fetchUserRequest, onFetchUserRequest);
  }
  
  export default function*() {
    yield fork(onFetchUserWatch);
  }
  