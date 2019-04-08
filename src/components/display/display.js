import React from "react";
import PropTypes from "prop-types";

import styles from "./display.module.scss";

const Display = (props) => {
  return (
    <>
      {props.value}
    </>
  );
};

Display.defaultProps = {};
Display.propTypes = {};

export default Display;
