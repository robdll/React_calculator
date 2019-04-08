import React from "react";
import PropTypes from "prop-types";

import styles from "./valueBtn.module.scss";

const ValueBtn = (props) => {
  return (
    <>
      <div className={styles.div}>{props.value}</div>
    </>
  );
};

ValueBtn.propTypes = {
  value: PropTypes.number.isRequired
};

export default ValueBtn;
