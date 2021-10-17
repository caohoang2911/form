import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from "@reduxjs/toolkit";
import { history } from "../utils";
import createSagaMiddleware from "redux-saga";
import counterReducer from "../features/counter/counterSlice";
import authReducer from "../store/slices/authSlice";

import { rootSaga } from "../store/sagas/rootSaga";

import { connectRouter } from "connected-react-router";

import { routerMiddleware } from "connected-react-router";

const sagaMiddleware = createSagaMiddleware();

const createRootReducer = combineReducers({
  router: connectRouter(history),
  counter: counterReducer,
  auth: authReducer,
});

export const store = configureStore({
  reducer: createRootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware, routerMiddleware(history)),
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
