import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { createBlogPost } from '../components/action/jsonfetch/Fetchdefect';
import { editdefect } from './action/jsonfetch/Editdefect';


 class Editdefectfrom extends Component {

  constructor(props) {
    super(props);
    this.state = {
        p:"",
        defectId:""
        
    };
}

componentDidMount(){
  this.Edit1()
 
}
 Edit1(){
    
  var p=0;
  //console.log(e)
  let url1 = `http://localhost:8080/library/findid/${1}`
  console.log(url1);
  fetch(url1)
      .then(resp => resp.json())
      .then(data => {

            p=data.description;
            console.log(p);
             this.setState({p});
      })
    
}

 
  
  render() {

  
 // var e=1
  //{console.log(this.props.Edit)}
//this.Edit1(this.props.Edit)
//this.componentDidMount(e)
  
    return (

      <div className="single-pro-review-area mt-t-30 mg-b-15">
      
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="product-payment-inner-st">
                <ul id="myTabedu1" className="tab-review-design">
                  <li className="active"><a href="#description">Edit DEFECTS</a></li>
                </ul>
                <div id="myTabContent" className="tab-content custom-product-edit">
                  <div className="product-tab-list tab-pane fade active in" id="description">

                    <form >
                      <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div className="review-content-section">
                            <div className="row">
                              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <div className="form-group">
                                  <label htmlFor="defectid"><b>DefectID :</b></label>
                                  <input type="text" className="form-control" name="defectId "  defaultValue={this.state.p || ''} value={this.state.defectId}  onChange={e => this.handleChange(e)} aria-describedby="emailHelp" placeholder="Enter defect id" />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="module"><b>Module</b></label>
                                  <select className="form-control" name="module " value={this.state.module} onChange={e => this.change1(e)}>
                                  {this.state.Developer}
                                  </select>
                                  
                                </div>
                                <div className="form-group">
                                  <label htmlFor="description"><b>Description :</b></label>
                                  <input type="text" className="form-control" name="description " value={this.state.description} onChange={e => this.change2(e)} placeholder="Enter description" />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="recreate"><b>Steps to recreate :</b></label>
                                  <textarea className="form-control" name="steps " value={this.state.steps} onChange={e => this.change3(e)} placeholder="Enter the steps" defaultValue={""} />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <div className="form-group">
                                  <label htmlFor="severity"><b>Severity</b></label>
                                  <select name="severity " value={this.state.severity} onChange={e => this.change4(e)} className="form-control">
                                    <option> {this.state.p}</option>
                                    <option>Medium</option>
                                    <option>Low</option>
                                  </select>
                                </div>
                                <div className="form-group">
                                  <label htmlFor="priority"><b>Priority</b></label>
                                  <select name="priority " value={this.state.priority} onChange={e => this.change5(e)} className="form-control">
                                    <option>High</option>
                                    <option>Medium</option>
                                    <option>Low</option>
                                  </select>
                                </div>
                                <div className="form-group">
                                  <label htmlFor="defectType"><b>Defect Type</b></label>
                                  <select name="defectType " value={this.state.defectType} onChange={e => this.change6(e)} className="form-control">
                                    <option>UI</option>
                                    <option>Functionality</option>
                                    <option>Enhancement</option>
                                    <option>Performance</option>
                                  </select>
                                </div>
                                <div>
                                  <label htmlFor="assignTo"><b>Assign To </b></label>
                                  <select name="assignTo " value={this.state.assignTo} onChange={e => this.change7(e)} className="form-control">
                                  {this.state.x} </select>
                                </div>
                                <div className="form-group">
                                  <label htmlFor="status"><b>Status</b></label>
                                  <select name="status " value={this.state.status} onChange={e => this.change8(e)} className="form-control">
                                    <option>new</option>
                                    <option>open</option>
                                    <option>fixed</option>
                                    <option>closed</option>
                                    <option>reopened</option>
                                    <option>rejected</option>
                                    <option>deffered</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="payment-adress">
                                  <button type="submit" className="btn btn-primary waves-effect waves-light" onClick={this.submit}>Add Defect</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
       {/* <Fetchdefetcdrop/> */}
      </div>




    );
  }
}
export default withRouter(Editdefectfrom);
