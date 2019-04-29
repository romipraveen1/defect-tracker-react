import React, {Component} from 'react';
import Addmoduleform from "./action/Addmoduleform";
import Fetchmodule from './action/jsonfetch/Fetchmodule';
import uuid from "uuid";

import {createBlogPost} from './action/jsonfetch/Fetchmodule';




export default class Content extends Component {

  state={
    item:[],
    id:0,
    item:"",
    item1:""
    
  }
 
  handleChange = e =>{
    this.setState({
      item:e.target.value

    });
  }

  
  handleChange1 = e =>{
    this.setState({
      item1:e.target.value

    });
  }



  handleSubmit =e=>{
    e.preventDefault();
    const newItem ={
     // id:this.state.id,
     moduleName:this.state.item,
     project:{
      projectId:this.state.item1
     }
    }


    console.log(newItem)

    createBlogPost(newItem)
    
    const updateItem=[...this.state.item,newItem];
    console.log(updateItem)
    this.setState({
      items:updateItem,
      item:"",
      item1:"",
      id:uuid()
    })

  }
 

    render(){
        return (
     
         <div className="all-content-wrapper">
     <div className="breadcome-area">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="breadcome-list single-page-breadcome">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                          <div className="breadcome-heading">
                            <form role="search" className="sr-input-func">
                              <input type="text" placeholder="Search..." className="search-int form-control" />
                              <a href="#"><i className="fa fa-search" /></a>
                            </form>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                          <ul className="breadcome-menu">
                            <li><a href="dashboard.html">Home</a> <span className="bread-slash">/</span>
                            </li>
                            <li><span className="bread-blod">Add Modules</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


       
 <Addmoduleform  item={this.state.item}
                  item1={this.state.item1}
                  id={this.state.id}
                  handleChange={this.handleChange}
                  handleChange1={this.handleChange1}
                  handleSubmit={this.handleSubmit}/>

                  
{/* <Fetchmodule items={this.state.items}/> */}
          </div>
      
     
            );
           
        }
    }