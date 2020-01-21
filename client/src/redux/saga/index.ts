import { put, takeEvery, all } from "redux-saga/effects";

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* helloSaga() {
  console.log('Hello Sagas!')
}

function* addContact() {
  yield delay(1000)
  yield put({ type: 'ADD_CONTACT',  })
}

function* watchIncrementAsync() {
  yield takeEvery('ADD_CONTACT_INITIATE', addContact)
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync()
  ])
}