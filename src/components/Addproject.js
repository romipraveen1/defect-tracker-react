import React, {Component} from 'react';
import Addprojectform from "./action/Addprojectform";
import Fetchmodule from './action/jsonfetch/Fetchmodule';
import uuid from "uuid";

import {Postproject} from './action/jsonfetch/Fetchproject';




export default class Content extends Component {

  state={
    item:[],
    id:0,
    item:""
    
  }
 
  handleChange = e =>{
    this.setState({
      item:e.target.value
    });
  }



  handleSubmit =e=>{
    e.preventDefault();
    const newItem ={
     // id:this.state.id,
     projectName:this.state.item
    }


    console.log(newItem)

   Postproject(newItem)
    
    const updateItem=[...this.state.item,newItem];
    console.log(updateItem)
    this.setState({
      items:updateItem,
      item:"",
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
                            <li><span className="bread-blod">Add Project</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


 <Addprojectform  item={this.state.item}
                  id={this.state.id}
                  handleChange={this.handleChange}
                  handleSubmit={this.handleSubmit}/>

                  

          </div>
      
     
            );
           
        }
    }