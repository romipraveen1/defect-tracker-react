import React, {Component} from 'react';
import {Postdeveloper } from './jsonfetch/Fetchdeveloper';

export default class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Developer: [],
            post:[],
            developerId:"",
            developerName:"",
            id:""
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

            developerId:"",
            developerName:"",
            id:""

        });
        const develop={
            developerId:this.state.developerId,
            developerName:this.state.developerName,
            
            module:{
                id:this.state.id
            }
            
           
        }
        console.log(develop);
        Postdeveloper(develop)
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
      
    
    




    render(){

      const {item,handleChange,handleSubmit}= this.props

        return (

            <div className="single-pro-review-area mt-t-30 mg-b-15">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="product-payment-inner-st">
                    <ul id="myTabedu1" className="tab-review-design">
                      <li className="active"><a href="#description">ADD Developer</a></li>
                    </ul>
                    <div id="myTabContent" className="tab-content custom-product-edit">
                      <div className="product-tab-list tab-pane fade active in" id="description">
                      <form onSubmit={this.onSubmit}>
                        <div className="row">
                          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="review-content-section">
                              <div className="row">

                              <label htmlFor="developerName"><b />Developer Id :</label>


                                <input type="text" className="form-control" id="developerId"
                                name="developerId" 
                                value={this.state.developerId}
                                onChange={this.onChange}/>
                                <br/>
                                <label htmlFor="developerName"><b />Developer Name :</label>


                                <input type="text" className="form-control" id="developerName"
                                name="developerName" 
                                value={this.state.developerName}
                                onChange={this.onChange}/>


                                <br />
                                <label htmlFor="moduleId">Module Id</label>
                                {/* <input type="text" className="form-control" id="id"
                                name="id" 
                                value={this.state.id}
                                onChange={this.onChange}/> */}
                                <select id="moduleId" className="form-control" name="id" value={this.state.id} onChange={this.onChange}>
                                
                                {this.state.Developer} 
                                </select>
                                <div className="row">
                                  <div className="col-lg-12">
                                    <div className="payment-adress">
                                      <br />

                                      <button type="submit" className="btn btn-primary waves-effect waves-light">Add Developer</button>

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