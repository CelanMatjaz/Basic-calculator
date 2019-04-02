import React, { Component } from 'react';

//Components
import Display from './components/Display';
import Button from './components/Button';

class App extends Component {
    state = {
        currentValue: '0',
        otherValue: ''
    }

    addValue = value => {
        if(this.state.currentValue.length < 5)
            this.setState(prevState => ({
                currentValue: (prevState.currentValue === '0' ? value.toString() : prevState.currentValue + value.toString())   
            }));
    }

    togglePlus = () => {
        this.setState(prevState => ({
            currentValue: (-prevState.currentValue).toString()  
        }));
    }

    addOperation = operation => {
        const newValue = this.state.currentValue + ` ${operation} `;
        this.setState(prevState => ({
            currentValue: '0',
            otherValue: newValue
        }));
    }

    reset = () => {
        this.setState({
            currentValue: '0'
        })
    }

    getResult = () => {
        const { currentValue, otherValue } = this.state;
        const res = Math.round(eval(otherValue + currentValue));

        this.setState(prevState => ({
            currentValue: res.toString(),
            otherValue: ''
        }));
    }

    render() {
        return (
            <div className="calculator">
                <Display currentValue={this.state.currentValue} otherValue={this.state.otherValue}/>
                <div id="buttons">
                    <Button value={7} click={this.addValue}/>
                    <Button value={8} click={this.addValue}/>
                    <Button value={9} click={this.addValue}/>
                    <Button value="+" click={this.addOperation}/>
                    <Button value={4} click={this.addValue}/>
                    <Button value={5} click={this.addValue}/>
                    <Button value={6} click={this.addValue}/>
                    <Button value="-" click={this.addOperation}/>
                    <Button value={1} click={this.addValue}/>
                    <Button value={2} click={this.addValue}/>
                    <Button value={3} click={this.addValue}/>
                    <Button value="*" click={this.addOperation}/>
                    <Button value="+/-" click={this.togglePlus}/>
                    <Button value={0} click={this.addValue}/>
                    <Button value="=" click={this.getResult}/>
                    <Button value="/" click={this.addOperation}/>                    
                </div>
                <button id="reset" onClick={this.reset}>Reset</button>
            </div>
        );
    }
}

export default App;