import React from "react";
import { applyMiddleware, compose, createStore } from "redux";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import GlobalStyles from "../utils/GlobalStyles";
import PropTypes from "prop-types";
import createSagaMiddleware from "redux-saga";

import rootReducer from "../reducers";
import rootSaga from "../sagas";

const NodeBird = ({ Component, store }) => {
  return (
    <Provider store={store}>
      <Head>
        <title>NodeBird</title>
      </Head>
      <AppLayout>
        <Component />
      </AppLayout>
      <GlobalStyles />
    </Provider>
  );
};

NodeBird.propTypes = {
  Component: PropTypes.elementType
};

const configureStore = (initialState, options) => {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [sagaMiddleware];
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : compose(
          applyMiddleware(...middlewares),
          !options.isServer &&
            typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : f => f
        );
  const store = createStore(rootReducer, initialState, enhancer);
  sagaMiddleware.run(rootSaga);
  return store;
};

export default withRedux(configureStore)(NodeBird);
