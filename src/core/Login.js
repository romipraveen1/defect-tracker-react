import React, { Component } from 'react';
import {BrowserRouter as Router, Link,Route} from 'react-router-dom';
import App from '../App';
import Routers from '../components/Router';



export default class login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: [],
        post:[],
        userName:"",
        passWord:"",
        
    };
    this.onChange=this.onChange.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
}

onChange(e){
    this.setState({[e.target.name]:e.target.value});
}

onSubmit(e){
    e.preventDefault();
    this.setState({

      userName:"",
      passWord:""
     

    });
    const user={
      userName:this.state.userName,
      passWord:this.state.passWord
     
      
    }
    console.log(user);
  
  
  let url = "http://localhost:8080/library/findUser"
  console.log(url);
  fetch(url)
      .then(resp => resp.json())
      
      .then(data => {
        console.log(data)
          let Developer = data.map((post) => {

            if(((user.userName)===(post.userName)) && ((user.passWord)===(post.passWord))){
              return (  
                console.log("log in success")
              )
            }
           
          })
          this.setState({ Developer: Developer });
      })


 
}

 


    render() {
        return(
       
          <div className="error-pagewrap">
          <div className="error-page-int">
            <div className="text-center m-b-md custom-login">
              <h3>PLEASE LOGIN TO APP</h3>
              <p>This is the best app ever!</p>
            </div>
            <div className="content-error">
              <div className="hpanel">
                <div className="panel-body">
                  <form onSubmit={this.onSubmit} >
                    <div className="form-group">
                      <label className="control-label" htmlFor="username">Username</label>
                      <input type="text"id="userName" 
                           name="userName" 
                           value={this.state.userName}
                           onChange={this.onChange}
                          required  required className="form-control" />
                      <span className="help-block small">Your unique username to app</span>
                    </div>
                    <div className="form-group">
                      <label className="control-label" htmlFor="password">Password</label>
                      <input type="password" title="Please enter your password" placeholder="******" 
                      name="passWord" 
                      value={this.state.passWord}
                      onChange={this.onChange} required  className="form-control" />
                      <span className="help-block small">Yur strong password</span>
                    </div>
                    <div className="checkbox login-checkbox">
                      <label>
                        <input type="checkbox" className="i-checks" required /> Remember me </label>
                      <p className="help-block small">(if this is a private computer)</p>
                    </div>
                  
                  <button type="submit" className="btn btn-success btn-block loginbtn"  >Login</button>
                  </form>
                  <a className="btn btn-default btn-block" href="register.html">Register</a>
                </div>
              </div>
            </div>
            <div className="text-center login-footer">
              <p>Copyright © 2019. All rights reserved.
              </p>
            </div>
          </div>

         {this.state.Developer} 

        </div>
       
     
        );}
}