import React from "react";
import PropTypes from "prop-types";

import styles from "./valueBtn.module.scss";

class ValueBtn extends React.Component {

  render() {
    return (
      <>
        <div onClick={() => this.props.handleClick(this.props.value)} className={`${styles.div} ${this.props.parentStyle}`}>{this.props.value}</div>
      </>
    );
  }

};

ValueBtn.propTypes = {
  value: PropTypes.string.isRequired,
};

ValueBtn.defaultProps = {
  handleClick: () => { }
};

export default ValueBtn;
