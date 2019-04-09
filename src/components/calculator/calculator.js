import React from "react";
import PropTypes from "prop-types";

import styles from "./calculator.module.scss";

import Display from '../display/display';
import ValueBtn from '../valueBtn/valueBtn';

const calculator = () => {

  const display = <div className={styles.displayContainer}>
      <Display />
    </div>;


  return (
      <section className={styles.calculator}>

        {display}

        <div className={styles.operatorBtn}><ValueBtn value={'+'}/></div>
        <div className={styles.operatorBtn}><ValueBtn value={'-'}/></div>
        <div className={styles.operatorBtn}><ValueBtn value={'*'}/></div>
        <div className={styles.operatorBtn}><ValueBtn value={'/'}/></div>


        <div className={styles.valueBtn}><ValueBtn value={'1'}/></div>
        <div className={styles.valueBtn}><ValueBtn value={'2'}/></div>
        <div className={styles.valueBtn}><ValueBtn value={'3'}/></div>
        <div className={styles.valueBtn}><ValueBtn value={'4'}/></div>
        <div className={styles.valueBtn}><ValueBtn value={'5'}/></div>
        <div className={styles.valueBtn}><ValueBtn value={'6'}/></div>
        <div className={styles.valueBtn}><ValueBtn value={'7'}/></div>
        <div className={styles.valueBtn}><ValueBtn value={'8'}/></div>
        <div className={styles.valueBtn}><ValueBtn value={'9'}/></div>
        <div className={styles.valueBtn}><ValueBtn value={'0'}/></div>
        <div className={styles.valueBtn}><ValueBtn value={'.'}/></div>
        
        <div className={styles.clearBtn}><ValueBtn value={'AC'}/></div>
        
        <div className={styles.resultContainer}><ValueBtn value={'='}/></div>


        
      </section>
  );
};

calculator.defaultProps = {};
calculator.propTypes = {};

export default calculator;
