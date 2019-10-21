import React from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import GlobalStyles from "../utils/GlobalStyles";
import PropTypes from "prop-types";

const NodeBird = ({ Component }) => {
  return (
    <>
      <Head>
        <title>NodeBird</title>
      </Head>
      <AppLayout>
        <Component />
      </AppLayout>
      <GlobalStyles />
    </>
  );
};

NodeBird.propTypes = {
  Component: PropTypes.elementType
};

export default NodeBird;
