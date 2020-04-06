import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import axios from 'axios'

import { getHomeLoan } from './MainActions';

import { GET_RECORDS_REQUEST, RECORDS_RESPONSE, RESPONSE_FAIL } from './MainActions';

export function* loadHomeLoans(action) {
    try {
        yield put({ type: GET_RECORDS_REQUEST })
        const response = yield call(axios.get, 'https://blaze.ratecity.com.au/api/search/home-loans')
        yield put({ type: RECORDS_RESPONSE, homeloanList: response.data.hits });
    } catch (err) {
        yield put({ type: RESPONSE_FAIL }, { message: err.message })
    }
}

export function* watchFetchLoanDetails() {
    yield takeEvery(RECORDS_RESPONSE, loadHomeLoans)
}