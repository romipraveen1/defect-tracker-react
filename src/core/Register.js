import React, { Component } from 'react';
import {Postuser} from '../components/action/jsonfetch/Fetchuser';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';


export default class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: [],
        post:[],
        userName:"",
        passWord:"",
        role:"",
        email:""
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
      passWord:"",
      role:"",
      email:""

    });
    const user={
      userName:this.state.userName,
      passWord:this.state.passWord,
      role:this.state.role,
      email:this.state.email
      
    }
    console.log(user);
  Postuser(user)
}


    render() {
        return(
            <div className="error-pagewrap">
            <div className="error-page-int">
              <div className="text-center custom-login">
                <h3>Registration</h3>
                <p>This is the best app ever!</p>
              </div>
              <div className="content-error">
                <div className="hpanel">
                  <div className="panel-body">
                    <form onSubmit={this.onSubmit}>
                      <div className="row">
                        <div className="form-group col-lg-12">
                          <label>Username</label>
                          <input className="form-control" id="userName" 
                           name="userName" 
                           value={this.state.userName}
                           onChange={this.onChange}
                          required />
                        </div>
                        <div className="form-group col-lg-6">
                          <label>Password</label>
                          <input type="password" className="form-control" id="passWord"
                            name="passWord" 
                            value={this.state.passWord}
                            onChange={this.onChange}
                           required
                          required />
                        </div>
                        <div className="form-group col-lg-6">
                          <label>Role Type</label>
                  
                           <Input type="select" name="role" id="role" value={this.state.role} onChange={this.onChange} autoComplete="address-level1">
                                  
                                    <option>QA</option>
                                    <option>DEVELOPER</option>
                           </Input>
                        </div>
                        <div className="form-group col-lg-6">
                          <label>Email Address</label>
                          <input className="form-control" id="email" 
                           name="email" 
                           value={this.state.email}
                           onChange={this.onChange}
                          required />
                        </div>
                        <div className="checkbox col-lg-12">
                          <input type="checkbox" className="i-checks" required /> Sigh up for our developing
                        </div>
                      </div>
                      <div className="text-center">
                        <button className="btn btn-success loginbtn" onclick="adddeveloper()">Register</button>
                        <button type="submit" className="btn btn-default">Cancel</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>



        );}
}