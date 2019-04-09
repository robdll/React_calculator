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
    this.calcResult = this.calcResult.bind(this);
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

  calcResult() {
    const newState = { ...this.state };
    const isValid = /^[-+]?(\d+(\.\d+)?)[*/+-][-+]?(\d+(\.\d+)?)$/.test(newState.displayValue)
    if(!isValid) return;
    // eslint-disable-next-line
    let newVal = eval(newState.displayValue);
    newVal = parseFloat(newVal.toFixed(4))
    newState.displayValue = `${newVal}`;
    this.setState(newState);
  }


  clear() {
    this.setState({displayValue: '' })
  }

  render() { 

    const display = <div className={styles.displayContainer} >
        <Display value={this.state.displayValue} />
      </div>;

    const operator = ['*','+','-','/']
      .map( i => <ValueBtn key={i} handleClick={this.handleClick} parentStyle={styles.operatorBtn} value={i}/>);

    const values = ['1','2','3','4','5','6','7','8','9','0','.']
      .map( i => <ValueBtn key={i} handleClick={this.handleClick} parentStyle={styles.valueBtn} value={i}/>);

    return (
      <section className={styles.calculator}>

        {display}

        {operator}

        {values}
        
        <ValueBtn handleClick={this.clear} parentStyle={styles.clearBtn} value={'AC'}/>
        
        <ValueBtn handleClick={this.calcResult} parentStyle={styles.resultContainer} value={'='}/>

      </section>
    );
  }
};

export default calculator;
