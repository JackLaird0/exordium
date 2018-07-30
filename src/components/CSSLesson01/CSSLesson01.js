import React, { Component } from 'react';
import './CSSLesson01.css';

export class CSSLesson01 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
  }

  handleInputChange = (event) => {
    const { value } = event.target;
    this.setState({ input: value })
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
            <div className="code">
              <p>.block &#123;</p>
              <p>display: flex;</p>
              <form>
                <input 
                  type="text"
                  value={this.state.input}
                  onChange={this.handleInputChange}
                />
              </form>
              <p>&#125;</p>
            </div>
          </div>
        </div>
        <div className="game-display">
          <div className="box">
          </div>
          <div className="target">
          </div>
        </div>
      </div>
    )
  }
}

export default CSSLesson01;