import React from "react";

import styles from "./calculator.module.scss";

import Display from '../display/display';
import ValueBtn from '../valueBtn/valueBtn';



class calculator extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      displayValue: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.clear = this.clear.bind(this);
  }


  isOperator(value) {
    return ['+', '*', '/', '-'].find( o => o === value);
  }

  handleClick(value) {
    const newState = { ...this.state };
    let currentValue = this.state.displayValue;

    if(value === '.') {
      const firstValueWithoutDotRegex = /^[-+]?(\d+)$/
      const secondValueWithoutDotRegex = /^(\d+(\.\d+)?)[*/+-][-+]?(\d+)$/
      const firstValueWithoutDot = firstValueWithoutDotRegex.test(currentValue);
      const secondValueWithoutDot = secondValueWithoutDotRegex.test(currentValue);
      const waitingValueRegex = /^(\d+(\.\d+)?)[*/+-][-+]?$/;
      const waitingValue = waitingValueRegex.test(currentValue);
       if(firstValueWithoutDot || secondValueWithoutDot) {
        newState.displayValue += value;
        this.setState(newState)
        return
      }
      if(currentValue === '' || waitingValue) {
        newState.displayValue += `0${value}`;
        this.setState(newState)
        return
      }
      //ignore otherwise
      return
    }

    if(this.isOperator(value)) {
      const hasFirstValueRegex = /^[-+]?(\d+(\.\d+)?)$/;
      const hasFirstValue = hasFirstValueRegex.test(currentValue);
      const hasFirstValueAndOperatorRegex = /^(\d+(\.\d+)?)[*/+-]$/;
      const hasFirstValueAndOperator = hasFirstValueAndOperatorRegex.test(currentValue);
      //append if does not exist
      if(hasFirstValue) {
        newState.displayValue += value;
        this.setState(newState)
        return
      }
      //replace if exists
      if(hasFirstValueAndOperator) {
        currentValue = currentValue.replace(/.$/, value)
        newState.displayValue = currentValue;
        this.setState(newState)
        return
      }
      //ignore otherwise
      return
    }

    newState.displayValue += value;
    this.setState(newState)
  }


  clear() {
    this.setState({displayValue: '' })
  }

  render() { 

    const display = <div className={styles.displayContainer} >
        <Display value={this.state.displayValue} />
      </div>;

    return (
      <section className={styles.calculator}>

        {display}

        <ValueBtn handleClick={this.handleClick} parentStyle={styles.operatorBtn} value={'+'}/>
        <ValueBtn handleClick={this.handleClick} parentStyle={styles.operatorBtn} value={'-'}/>
        <ValueBtn handleClick={this.handleClick} parentStyle={styles.operatorBtn} value={'*'}/>
        <ValueBtn handleClick={this.handleClick} parentStyle={styles.operatorBtn} value={'/'}/>

        <ValueBtn handleClick={this.handleClick} parentStyle={styles.valueBtn} value={'1'}/>
        <ValueBtn handleClick={this.handleClick} parentStyle={styles.valueBtn} value={'2'}/>
        <ValueBtn handleClick={this.handleClick} parentStyle={styles.valueBtn} value={'3'}/>
        <ValueBtn handleClick={this.handleClick} parentStyle={styles.valueBtn} value={'4'}/>
        <ValueBtn handleClick={this.handleClick} parentStyle={styles.valueBtn} value={'5'}/>
        <ValueBtn handleClick={this.handleClick} parentStyle={styles.valueBtn} value={'6'}/>
        <ValueBtn handleClick={this.handleClick} parentStyle={styles.valueBtn} value={'7'}/>
        <ValueBtn handleClick={this.handleClick} parentStyle={styles.valueBtn} value={'8'}/>
        <ValueBtn handleClick={this.handleClick} parentStyle={styles.valueBtn} value={'9'}/>
        <ValueBtn handleClick={this.handleClick} parentStyle={styles.valueBtn} value={'0'}/>
        <ValueBtn handleClick={this.handleClick} parentStyle={styles.valueBtn} value={'.'}/>
        
        <ValueBtn handleClick={this.clear} parentStyle={styles.clearBtn} value={'AC'}/>

        <ValueBtn parentStyle={styles.resultContainer} value={'='}/>

      </section>
    );
  }
};

calculator.defaultProps = {};
calculator.propTypes = {};

export default calculator;
