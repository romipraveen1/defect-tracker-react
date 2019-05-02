import React, {Component} from 'react';



export default class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Developer: [],
            User: [],
            post:[],
            userId:"",
            moduleName:"",
            projectId:""
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

            moduleName:"",
            projectId:"",
            userId:""

        });
        const develop={
            moduleName:this.state.moduleName,
            projectId:this.state.projectId,
            
          
            userId:this.state.userId
            
            
           
        }
        console.log(develop);
        //Postdeveloper(develop)
    }


    componentDidMount() {

        this. getDeveloperFromUser()
        let url = "http://localhost:8080/library/findProject"
        console.log(url);
        fetch(url)
            .then(resp => resp.json())
            
            .then(data => {
              console.log(data)
                let Developer = data.map((post) => {
                    return (  
                      <option value={post.projectId} >{post.projectName}</option>
                        
                    )
                })
                this.setState({ Developer });
            })
      
      }
      getDeveloperFromUser(){

        let url = "http://localhost:8080/library/findUser"
        console.log(url);
        fetch(url)
            .then(resp => resp.json())
            
            .then(data => {
              console.log(data)
                let User = data.map((post) => {
                    if(post.role==="DEVELOPER"){

                    
                    return (  
                      <option value={post.userId} >{post.userName}</option>
                        
                    )
                }
                })
                this.setState({ User });
            })

      }
    
    
    




    render(){

      const {item,handleChange,handleSubmit}= this.props

        return (

            <div className="single-pro-review-area mt-t-30 mg-b-15">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="product-payment-inner-st">
                    <ul id="myTabedu1" className="tab-review-design">
                      <li className="active"><a href="#description">ADD Module user</a></li>
                    </ul>
                    <div id="myTabContent" className="tab-content custom-product-edit">
                      <div className="product-tab-list tab-pane fade active in" id="description">
                      <form onSubmit={this.onSubmit}>
                        <div className="row">
                          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="review-content-section">
                              <div className="row">

                              <label htmlFor="developerName"><b />Module Name :</label>


                                <input type="text" className="form-control" id="moduleName"
                                name="moduleName" 
                                value={this.state.moduleName}
                                onChange={this.onChange}/>
                                <br/>
                                <label htmlFor="developerName"><b />User Name :</label>


                                {/* <input type="text" className="form-control" id="userId"
                                name="userId" 
                                value={this.state.userId}
                                onChange={this.onChange}/> */}
                                 <select id="userId" className="form-control" name="userId" value={this.state.userId} onChange={this.onChange}>
                                
                                {this.state.User} 
                                </select>

                                {/* <MultiSelectComponent id="userId" dataSource={this.state.User}  fields={this.state.User}  placeholder="Select countries"/> */}


                                <br />
                                <label htmlFor="moduleId">Project Id</label>
                               
                                <select id="projectId" className="form-control" name="projectId" value={this.state.projectId} onChange={this.onChange}>
                                
                                {this.state.Developer} 
                                </select>
                                <div className="row">
                                  <div className="col-lg-12">
                                    <div className="payment-adress">
                                      <br />

                                      <button type="submit" className="btn btn-primary waves-effect waves-light">Add module</button>

                                    </div>
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
          </div>
       
            
          

            );
        }
        }