import React from "react";
import PropTypes from "prop-types";

import styles from "./calculator.module.scss";

import Display from '../display/display';
import OperatorBtn from '../operatorBtn/operatorBtn';
import ValueBtn from '../valueBtn/valueBtn';
import ClearBtn from '../clearBtn/clearBtn';
import DotBtn from '../dotBtn/dotBtn';
import ResultBtn from '../resultBtn/resultBtn';

const calculator = () => {

  const display = <div className={styles.displayContainer}>
      <Display />
    </div>;


  return (
      <section className={styles.calculator}>

        {display}

        <OperatorBtn className={styles.operatorBtn } operator={'+'}/>
        <OperatorBtn className={styles.operatorBtn } operator={'-'}/>
        <OperatorBtn className={styles.operatorBtn } operator={'*'}/>
        <OperatorBtn className={styles.operatorBtn } operator={'/'}/>

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
        
        <div className={styles.clearBtn}><ClearBtn value={'AC'}/></div>
        
        <div className={styles.resultContainer}><ResultBtn operator={'='}/></div>


        
      </section>
  );
};

calculator.defaultProps = {};
calculator.propTypes = {};

export default calculator;
