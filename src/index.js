import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// ========================================

class MainApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      inputJSON: {}
    }
    this.loadInput = this.loadInput.bind(this);
    this.saveInput = this.saveInput.bind(this);
  }

  componentWillMount() {
    //Load saved data...
    let savedData = localStorage.getItem("savedJSON");
    let defaultData = '[{"test1": "true"},{"test2": "true"},{"test3": "true"}]';

    if(savedData){
      this.setState ({
        inputText: savedData
      });
    } else {
      this.setState ({
        inputText: defaultData
      });
    }
  }

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
    let parsedInput;

    try {
      parsedInput = JSON.parse(textInput);
    } catch (e) {
      parsedInput = {"error": "Bad JSON"};
    }

    this.setState ({
      inputText: textInput,
      inputJSON: parsedInput
    });

    console.log(this.state.inputText);
    console.log(this.state.inputJSON);
  }

  saveInput(){
    localStorage.setItem("savedJSON", this.state.inputText);
  }

  render() {

    return (
      <div>
        <div>
          <textarea id='inputArea' defaultValue={this.state.inputText}></textarea>
          <div id='outputArea'></div>
        </div>
        <p>Instructions:
          <br />Edit JSON on the left side, when ready press Load to parse it.
          <br />You are able to save this JSON for future reference by pressing Save.
        </p>
        <hr />
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
