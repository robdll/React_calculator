import React from "react";
import PropTypes from "prop-types";

import styles from "./clearBtn.module.scss";

const clearBtn = () => {
  return (
    <div className={styles.clear}>
      AC
    </div>
  );
};

clearBtn.defaultProps = {};
clearBtn.propTypes = {};

export default clearBtn;
