import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// ========================================

class MainApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '{"test": "true"}',
      inputJSON: {}
    }
    this.loadInput = this.loadInput.bind(this);
    this.saveInput = this.saveInput.bind(this);
  }
  // componentWillUpdate(){
  //   console.log('App will update...');
  // }
  // componentDidUpdate(){
  //   console.log('App updated...');
  // }
  componentDidMount() {
    console.log('App mounted...');

    //Event listeners...
    const loadBtn = document.getElementById('LoadBtn');
    const saveBtn = document.getElementById('SaveBtn');
    loadBtn.addEventListener('click', () => {this.loadInput();});
    saveBtn.addEventListener('click', () => {this.saveInput();});
  }

  loadInput(){
    let textInput = document.getElementById("inputArea").value;

    this.setState ({
      inputText: textInput,
      inputJSON: JSON.parse(textInput)
    });

    console.log(this.state.inputText);
    console.log(this.state.inputJSON);
  }

  saveInput(){

  }

  render() {

    return (
      <div>
        <div>
          <textarea id='inputArea' rows="4" cols="50">{this.state.inputText}</textarea>
          <div id='outputArea'></div>
        </div>
        <button id='LoadBtn'>Load</button>
        <button id='SaveBtn'>Save</button>
      </div>
    );
  }
};

// ========================================

ReactDOM.render(
  <MainApp />,
  document.getElementById('root')
);
