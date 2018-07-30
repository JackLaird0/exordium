import React, { Component } from 'react';
import './CSSLesson01.css';

export class CSSLesson01 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      answer: 'justify-content: flex-end;',
      correct: 'initial'
    }
  }

  handleInputChange = (event) => {
    const { value } = event.target;
    this.setState({ input: value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {input, answer} = this.state;
    if (input === answer) {
      this.setState({ correct: 'correct'})
    } else {
      alert('bahh humbug')
    }
  }

  render() {
    return (
      <div className="css-lesson-01">
        <div className="game-controls">
          <h1>Lesson 01: Flex Box</h1>
          <p>Use your knowledge of flex box to manipulate the box so it is on top of the target.
          </p>
          <div className="text-editor">
            <div className="line-numbers">
              <p>1</p>
              <p>2</p>
              <p>3</p>
              <p>4</p>
              <p>5</p>
              <p>6</p>
              <p>7</p>
              <p>8</p>
              <p>9</p>
              <p>10</p>              
            </div>
            <div className="code-container">
              <p className="code">.block &#123;</p>
              <p className="indent code">display: flex;</p>
              <form 
                className="indent"
                onSubmit={this.handleSubmit}
              >
                <input 
                  type="text"
                  value={this.state.input}
                  onChange={this.handleInputChange}
                />
              </form>
              <p className="code">&#125;</p>
            </div>
          </div>
        </div>
        <div className="game-display">
          <div className={this.state.correct}>
            <div className="box">
            </div>
          </div>
          <div className="target">
          </div>
        </div>
        
      </div>
    )
  }
}

export default CSSLesson01;