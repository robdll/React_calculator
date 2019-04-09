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

  handleClick(value) {
    const newState = { ...this.state };
    newState.displayValue += value;
    this.setState({displayValue: value})
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
