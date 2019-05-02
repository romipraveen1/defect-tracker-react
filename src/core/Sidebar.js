import React, {Component} from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';


import Content from '../components/Addmodule';
export default class Sidebar extends Component {
    render(){
        return (
            <div>
        <div className="left-sidebar-pro">
          <nav id="sidebar" className>
            <div className="sidebar-header">
              <a href="index.html"><img className="main-logo" src="img/logo/logo.png" alt /></a>
              <strong><a href="index.html"><img src="img/logo/logosn.png" alt /></a></strong>
            </div>
            <div className="left-custom-menu-adp-wrap comment-scrollbar">
              <nav className="sidebar-nav left-sidebar-menu-pro">
                <ul className="metismenu" id="menu1">
                  <li className="active">
                    <a className="has-arrow" href="index.html">
                      <span className="educate-icon educate-home icon-wrap" />
                      <span className="mini-click-non">
                      <Link to="/Dashboard" >Defect Home</Link></span>
                    </a>
                    <ul className="submenu-angle" aria-expanded="true">
                      <li><a title="Dashboard v.1" ><span className="mini-sub-pro"> 
                      <Link to="/Addproject" >Add Project</Link>
                        </span></a></li>
                    </ul>
                  </li>
                  <li>
                    <a title="Landing Page" href="events.html" aria-expanded="false"><span className="educate-icon educate-event icon-wrap sub-icon-mg" aria-hidden="true" />
                      <span className="mini-click-non">Event</span></a>
                  </li>
                  <li>
                    <a className="has-arrow"  aria-expanded="false"><span className="educate-icon educate-library icon-wrap" /> <span className="mini-click-non">Defects</span></a>
                    <ul className="submenu-angle" aria-expanded="false">
                      <li><a title="Add Library" href="defects.html">
                      <span className="mini-sub-pro">
                      <Link to="/Adddefect"> Add Defect</Link>
                     </span></a></li>
                      <li><a title="All Library" href="library-assets.html"><span className="mini-sub-pro">
                          <Link to="/Showdefect">All Defects</Link> 
                          </span></a></li>
                      <li><a title="Edit Library" href="edit-library-assets.html"><span className="mini-sub-pro">
                      <Link to="/Editdefectform">Edit Defects</Link></span></a></li>
                    </ul>
                  </li>
                  <li>
                    <a className="has-arrow" href="all-professors.html" aria-expanded="false"><span className="educate-icon educate-professor icon-wrap" /> <span className="mini-click-non">Developers</span></a>
                    <ul className="submenu-angle" aria-expanded="false">
                      <li><a title="Add Library" href="developers.html"><span className="mini-sub-pro">
                     <Link to="/Adddevelopers">AddDeveloper</Link>
                      </span></a></li>
                      <li><a title="All Professors" href="all-professors.html"><span className="mini-sub-pro">All
                            Developers</span></a></li>
                      {/* <li><a title="Add Professor" href="add-professor.html"><span class="mini-sub-pro">Add
                                                    Developer</span></a></li> */}
                      <li><a title="Edit Professor" href="edit-professor.html"><span className="mini-sub-pro">Edit
                            Developer</span></a></li>
                      <li><a title="Professor Profile" href="professor-profile.html"><span className="mini-sub-pro">Developer Profile</span></a></li>
                    </ul>
                  </li>
                  <li>
                    <a className="has-arrow" href="all-courses.html" aria-expanded="false"><span className="educate-icon educate-library icon-wrap" /> <span className="mini-click-non">Modules</span></a>
                    <ul className="submenu-angle" aria-expanded="false">
                      <li><a title="Add Library" href="modules.html"><span className="mini-sub-pro">
                      <Link to="/Addmodule"> AddModule</Link></span></a></li><br/>
                      <li><a title="Add Library" href="modules.html"><span className="mini-sub-pro">
                      <Link to="/ModuleUser">ModuleUser</Link></span></a></li>
                    </ul>
                  </li>
                  {/* <li>
                    <a className="has-arrow" href="all-courses.html" aria-expanded="false"><span className="educate-icon educate-library icon-wrap" /> <span className="mini-click-non">Modules</span></a>
                    <ul className="submenu-angle" aria-expanded="false">
                      <li><a title="Add Library" href="modules.html"><span className="mini-sub-pro">
                      <Link to="/AddModuleUser"> AddModuleUser</Link></span></a></li>
                    </ul>
                  </li> */}
                  <li>
                    <a className="has-arrow" href="mailbox.html" aria-expanded="false"><span className="educate-icon educate-message icon-wrap" /> <span className="mini-click-non">Mailbox</span></a>
                    <ul className="submenu-angle" aria-expanded="false">
                      <li><a title="Inbox" href="mailbox.html"><span className="mini-sub-pro">Inbox</span></a>
                      </li>
                      <li><a title="View Mail" href="mailbox-view.html"><span className="mini-sub-pro">View
                            Mail</span></a></li>
                      <li><a title="Compose Mail" href="mailbox-compose.html"><span className="mini-sub-pro">Compose Mail</span></a></li>
                    </ul>
                  </li>
                  <li id="removable">
                    <a className="has-arrow" href="#" aria-expanded="false"><span className="educate-icon educate-pages icon-wrap" /> <span className="mini-click-non">Pages</span></a>
                    <ul className="submenu-angle page-mini-nb-dp" aria-expanded="false">
                      <li><a title="Login" href="index.html"><span className="mini-sub-pro">Login</span></a></li>
                      <li><a title="Register" href="register.html"><span className="mini-sub-pro"><Link to="/Register">Register</Link></span></a></li>
                      <li><a title="Password Recovery" href="password-recovery.html"><span className="mini-sub-pro">Password Recovery</span></a></li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </nav>
        </div>
    




        </div>

            )
        }
    }