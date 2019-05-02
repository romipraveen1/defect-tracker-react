import React, {Component} from 'react';

import AddModuleUser from './AddModuleUser';

export default class Moduleuser extends Component {
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
                        <li><span className="bread-blod">Add Module user</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
        <AddModuleUser/>
     
          </div>
      

            );
        }
    }