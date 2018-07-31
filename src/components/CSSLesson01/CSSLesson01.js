import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './CSSLesson01.css';

export class CSSLesson01 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      styles : {},
      nextButton: true,
    }
  }

  handleInputChange = (event) => {
    const { value } = event.target;
    let key = value.split(':')[0]
    let val = value.split(':')[1]
    this.setState({ styles : {
      [key]: val
    }})
  }

  toggleNextButton = (event) => {
    let { value } = event.target;
    if (
        value === 'justify-content: flex-end;' ||
        value === 'justify-content: flex-end'
      ) {
      this.setState({ nextButton: false })
    } else {
      this.setState({ nextButton: true })
    }
  }

  render() {
    return (
      <div className="css-lesson-01">
        <div className="game-controls">
          <div className="instructions">
            <h1 className="game-header">Lesson 01: Flex Box</h1>
            <p className="game-description">
              Use your knowledge of flex box to manipulate the box so it is on top of the target.
              To get started use the <span>justify-content</span> property, which aligns items horizontally.
            </p>
            <p className="game-description">
              The text editor accepts the following values:
            </p>
            <ul>
              <li><span>flex-start</span>: Items align to the left side of the container.</li>
              <li><span>flex-end</span>: Items align to the right side of the container.</li>
              <li><span>center</span>: Items align at the center of the container.</li>  
              <li><span>space-around</span>: Items display with equal spacing between them.</li>
              <li><span>space-between</span>: Items display with equal spacing around them.</li>          
            </ul>
          </div>
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
              <p className="code">.container &#123;</p>
              <p className="indent code">display: flex;</p>
              <form 
                className="indent"
                onSubmit={(event) => {
                  event.preventDefault();
                }}
              >
                <input 
                  type="text"
                  value={this.state.input}
                  onChange={(event) => {
                    this.handleInputChange(event);
                    this.toggleNextButton(event);
                  }}
                />
              </form>
              <p className="code">&#125;</p>
              <NavLink to="/lessons_css">
                <button 
                  className="next-button" 
                  disabled={this.state.nextButton}
                >
                Next
                </button>  <button 
                  className="next-button" 
                  disabled={this.state.nextButton}
                >
                Next
                </button>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="game-display">
          <div className="target">
          </div>
          <div 
            className="box-container"
            style={this.state.styles}
          >
            <div className="box">
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CSSLesson01;