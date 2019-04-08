import React from "react";
import PropTypes from "prop-types";

import styles from "./resultBtn.module.scss";

const resultBtn = (props) => {
  return (
    <div className={styles.operator}>
      {props.operator}
    </div>
  );
};

resultBtn.defaultProps = {};
resultBtn.propTypes = {};

export default resultBtn;
