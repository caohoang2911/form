import { push } from "connected-react-router";
import { all, put } from "redux-saga/effects";
import authSaga from "./authSaga";

export function* rootSaga() {
  yield put(push("/login"));

  yield all([authSaga()]);
}
