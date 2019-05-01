import React, { Component } from 'react';
import './App.css';
import {Form, Button} from "react-bootstrap";
import axios from 'axios';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      length : 0,
      num_file:1,
      query :"",
      resumes:[]
    };
  }
numHandler(event){
  this.setState({num_file: event.target.value});

}
searchHandler(event){
  this.setState({query: event.target.value});
  this.setState({num_file: 1});


  return axios.get('https://cs410resumeranker.herokuapp.com/api/ranking/'+ event.target.value).then(response => {
      this.setState({length: response.data.length})
}).catch(error => {
  console.log(error)
})

}

buttonHandler(event){
  let query = this.state.query;
  if(!query){
      this.setState({resumes: []});
  }

  return axios.get('https://cs410resumeranker.herokuapp.com/api/ranking/'+query).then(response => {
    var r = response.data.slice(0,this.state.num_file);
      this.setState({resumes: r});
}).catch(error => {
  console.log(error)
})

}



  render() {
    let datas = this.state.resumes.map((data,index) => {
      if(this.state.length != 0){
      return (
        <tr>
        <td>{index+1}</td>
        <td>{data.first}</td>
        <td>{data.last}</td>
        <td><a href={"https://cs410resumeranker.herokuapp.com/api/file/"+data.link} target="_blank">{data.link}</a></td>
        </tr>
     )
   }
});
let message = () => {
  if(this.state.length == 0){
  return(
    <h1 id='message'>No resume available</h1>
  )
}
}
    return (

      <div className="App">
      <div className="head">
      <div className="icon">
      <i className="fas fa-portrait"></i>
      </div>
      <h1>Resume Ranker</h1>
      <h2>CS410 final project by: Peng Gu, Jiawen Wu, Jinlin Xu, Yujie Shao, Kehan Li</h2>
      </div>
      <div id='search'>
      <div id="bar">
      <input id="s_bar"  onChange={this.searchHandler.bind(this)} placeholder="Enter the keyword here first"/>
      </div>
      <div id='form_div'>
      <Form>
      <Form.Group controlId="formName">
                <Form.Label>How many resumes would you like to see?</Form.Label>
                <select className="browser-default custom-select" onChange={e => this.numHandler(e)}>
            {
            Array.from({length: this.state.length}).map((x, i) => {
              return  (
                <option key={i+1}>{i+1}</option>
              )
              })
          }
            </select>
              </Form.Group>
      </Form>
      <Button id="myBtn" onClick={this.buttonHandler.bind(this)}>Search</Button>
      </div>
      </div>
      <table>
      <tr>
    <th>Ranking</th>
    <th>First name</th>
    <th>Last name</th>
    <th>Resume</th>
  </tr>
  {datas}
  </table>
{message()}
      </div>
    );
  }
}

export default App;
