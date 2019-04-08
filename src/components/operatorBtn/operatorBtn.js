import React from "react";
import PropTypes from "prop-types";

import styles from "./operatorBtn.module.scss";

const OperatorBtn = (props) => {
  return (
    <div className={styles.operator}>
      {props.operator}
    </div>
  );
};

OperatorBtn.propTypes = {
 value: PropTypes.string.isRequired
};

export default OperatorBtn;
