import { PayloadAction } from "@reduxjs/toolkit";
import { push } from "connected-react-router";
import { call, delay, fork, put, race, take } from "redux-saga/effects";
import { authAction, login, logout } from "../slices/authSlice";
import { LoginPayload } from "./../slices/authSlice";
import { resolve } from "dns";

function* handleLogin(loginPayload: LoginPayload) {
  console.log(loginPayload, "loginPayload");
  try {
    localStorage.setItem("token", "token_fake");
    yield put(
      authAction.loginSuccess({
        id: "11",
        name: "cao hoang",
        age: 27,
      })
    );
    yield put(push("/admin"));
  } catch (e: any) {
    yield put(authAction.loginFailed(e.message));
  }
}

function* handleLogOut() {
  localStorage.removeItem("token");
  yield put(push("/login"));
}

function* watchAuthFlow() {
  while (true) {
    const isLogin = Boolean(localStorage.getItem("token"));
    if (!isLogin) {
      const actionLogin: PayloadAction<LoginPayload> = yield take(login.type);
      yield fork(handleLogin, actionLogin.payload);
    }

    yield take(logout.type);
    yield call(handleLogOut);
  }
}

const apiCall = (): any => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve({ posts: 3 });
    }, 500)
  );
};

function* fetchApi(): any {
  const response = yield call(apiCall);
  console.log(response, "response");
}

function* fetchPostsWithTimeout(): any {
  const { posts, timeout } = yield race({
    posts: call(fetchApi),
    timeout: delay(1000),
  });
  // console.log(posts, "post");
  // if (posts) yield put({ type: "POSTS_RECEIVED", posts });
  // else yield put({ type: "TIMEOUT_ERROR" });
}

export default function* authSaga() {
  yield fork(watchAuthFlow);

  yield fork(fetchPostsWithTimeout);
}
