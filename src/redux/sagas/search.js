import { put, call, takeLatest } from 'redux-saga/effects';
import { SEARCH_PLACE_START, SEARCH_PLACE_ERROR, SEARCH_PLACE_COMPLETE } from '../consts/actionsTypes';


import { apiCall } from '../api';

export function* searchPlace({ payload}){
    try{
      const results = yield call (apiCall, `&s=${payload.Name}`, null, null, 'GET');
      yield put({ type: SEARCH_PLACE_COMPLETE, results});


    }catch (error){
      yield put({ type: SEARCH_PLACE_ERROR, error});


    }
}

export default function* search() {
    yield takeLatest(SEARCH_PLACE_START, searchPlace);
};

console.log(searchPlace)