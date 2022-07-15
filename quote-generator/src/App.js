import React, { Component }  from 'react';
import './App.css';
import {quotesArr} from './quotes.js';

class App extends React.Component{
  constructor(props){
    super(props);
    var randomNum = Math.floor(Math.random() * quotesArr.length);
    this.state = {
      quote: quotesArr[randomNum].quote,
      author: quotesArr[randomNum].author,
    }
  this.generateNewQuote = this.generateNewQuote.bind(this);

  }



  generateNewQuote(){
    var randomNum = Math.floor(Math.random() * quotesArr.length);
    this.setState({
      quote: quotesArr[randomNum].quote,
      author: quotesArr[randomNum].author,
    })
  }

  render() {
    return(
      <div id="quote-box">
        <div id="textbox">
          <h1 id="text"><i class="fa fa-quote-left fa-xs" aria-hidden="true"></i>{this.state.quote}</h1>
          <p id="author">- {this.state.author}</p>
        </div>
        <div id="btns">
          <a href="twitter.com/intent/tweet" id="tweet-quote" target='_blank'><i class="fab fa-twitter fa-lg"></i></a>
          <button type="button" id="new-quote" onClick={this.generateNewQuote}>Refresh quote</button>

        </div>


      </div>


    )
  }

}

export default App;
