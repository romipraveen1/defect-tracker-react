import React, { Component } from 'react';
import { createBlogPost } from './jsonfetch/Fetchdefect';
import Fetchdefetcdrop from './jsonfetch/Fetchdefetcdrop';

export default class Content extends Component {

  constructor(props) {
    super(props);
    this.state = {
        Developer: [],
        post:[]
    };
}

  state = {

    defectId: "",
    module: "",
    description: "",
    steps: "",
    severity: "",
    priority: "",
    defectType: "",
    assignTo: "",
    status: ""
  };

  handleChange = (e) => {
    this.setState({ 
      defectId: e.target.value
     
    })
}


change1 = (e) => {
  this.setState({ 
    module: e.target.value
  })

  let id=e.target.value
console.log(id)


let url = `http://localhost:8080/library/findmodule/${id}`;
console.log(url);
fetch(url)
    .then(resp => resp.json())
    
    .then(data => {
      console.log(data)
     
        let x = data.developer.map((post) => {
            return ( 
              <option value={post.id} >{ post.developerName}</option>  
            )
        })
        this.setState({ x });
    })
}
change2 = (e) => {
  this.setState({ 
    description: e.target.value
   
  })
}
change3 = (e) => {
  this.setState({ 
    steps: e.target.value
   
  })
}

change4 = (e) => {
  this.setState({ 
    severity: e.target.value
   
  })
}
change5 = (e) => {
  this.setState({ 
    priority: e.target.value
   
  })
}
change6 = (e) => {
  this.setState({ 
    defectType: e.target.value
   
  })
}
change7 = (e) => {
  this.setState({ 
    assignTo: e.target.value
   
  })
}
change8 = (e) => {
  this.setState({ 
    status: e.target.value
   
  })
}


  // change = (e) => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   });
  //   console.log(e.target.name)
  // }

  submit=(e) =>{
    e.preventDefault();
    this.setState({
      defectId: "",
      module: "",
      description: "",
      steps: "",
      severity: "",
      priority: "",
      defectType: "",
      assignTo: "",
      status: ""
    })
   
    createBlogPost(this.state);
  }


  
  componentDidMount() {
    let url = "http://localhost:8080/library/findmodule"
    console.log(url);
    fetch(url)
        .then(resp => resp.json())
        
        .then(data => {
          console.log(data)
            let Developer = data.map((post) => {
                return (  
                  <option value={post.id} >{post.moduleName}</option>
                    
                )
            })
            this.setState({ Developer: Developer });
        })
  
  }
  




  render() {
    

    // let planets = this.props.state.planets;
    // let optionItems = planets.map((planet) =>
    //         <option key={planet.name}>{planet.name}</option>
    //     );

    //const {item,handleChange,handleSubmit}= this.props

    return (


      <div className="single-pro-review-area mt-t-30 mg-b-15">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="product-payment-inner-st">
                <ul id="myTabedu1" className="tab-review-design">
                  <li className="active"><a href="#description">ADD DEFECTS</a></li>
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
                                  <input type="text" className="form-control" name="defectId " value={this.state.defectId} onChange={e => this.handleChange(e)} aria-describedby="emailHelp" placeholder="Enter defect id" />
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
                                    <option>High</option>
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