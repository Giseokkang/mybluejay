import React from "react";
import { applyMiddleware, compose, createStore } from "redux";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import GlobalStyles from "../utils/GlobalStyles";
import PropTypes from "prop-types";
import createSagaMiddleware from "redux-saga";

import rootReducer from "../reducers";
import rootSaga from "../sagas";
import { loadUserRequest } from "../reducers/user";
import axios from "axios";

const NodeBird = ({ Component, store, pageProps }) => {
  return (
    <Provider store={store}>
      <Head>
        <title>NodeBird</title>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
      <GlobalStyles />
    </Provider>
  );
};

NodeBird.propTypes = {
  Component: PropTypes.elementType,
  store: PropTypes.object.isRequired,
  pageProps: PropTypes.object.isRequired
};

NodeBird.getInitialProps = async context => {
  const { ctx, Component } = context;
  let pageProps = {};
  const state = ctx.store.getState();
  if (ctx.isServer) {
    const cookie = ctx.req.headers.cookie;
    if (ctx.isServer && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }
  }

  if (!state.user.myInformation.id) {
    ctx.store.dispatch({
      type: loadUserRequest().type
    });
  }
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  return { pageProps };
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
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

export default withRedux(configureStore)(withReduxSaga(NodeBird));
