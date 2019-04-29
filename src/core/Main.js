import React, {Component} from 'react';

import Content from '../components/Addmodule';
export default class Main extends Component {

    render(){
        return (
<div className="all-content-wrapper">
<div className="container-fluid">
  <div className="row">
    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <div className="logo-pro">
        <a href="index.html"><img className="main-logo" src="img/logo/logo.png" alt /></a>
      </div>
    </div>
  </div>
</div>

<div className="header-advance-area">
  <div className="header-top-area">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="header-top-wraper">
            <div className="row">
              <div className="col-lg-1 col-md-0 col-sm-1 col-xs-12">
                <div className="menu-switcher-pro">
                  <button type="button" id="sidebarCollapse" className="btn bar-button-pro header-drl-controller-btn btn-info navbar-btn">
                    <i className="educate-icon educate-nav" />
                  </button>
                </div>
              </div>
              <div className="col-lg-6 col-md-7 col-sm-6 col-xs-12">
                <div className="header-top-menu tabl-d-n">
                  <ul className="nav navbar-nav mai-top-nav">
                    <li className="nav-item dropdown res-dis-nn">
                      <a href="#" data-toggle="dropdown" role="button" aria-expanded="false" className="nav-link dropdown-toggle">Project
                        <span className="angle-down-topmenu"><i className="fa fa-angle-down" /></span></a>
                      <div role="menu" className="dropdown-menu animated zoomIn">
                        <a href="#" className="dropdown-item">Documentation</a>
                        <a href="#" className="dropdown-item">Expert Backend</a>
                        <a href="#" className="dropdown-item">Expert FrontEnd</a>
                        <a href="#" className="dropdown-item">Contact Support</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                <div className="header-right-info">
                  <ul className="nav navbar-nav mai-top-nav header-right-menu">
                    <li className="nav-item dropdown">
                      <a href="#" data-toggle="dropdown" role="button" aria-expanded="false" className="nav-link dropdown-toggle"><i className="educate-icon educate-message edu-chat-pro" aria-hidden="true" /><span className="indicator-ms" /></a>
                      <div role="menu" className="author-message-top dropdown-menu animated zoomIn">
                        <div className="message-single-top">
                          <h1>Message</h1>
                        </div>
                        <ul className="message-menu">
                          <li>
                            <a href="#">
                              <div className="message-img">
                                <img src="img/contact/1.jpg" alt />
                              </div>
                              <div className="message-content">
                                <span className="message-date">16 Sept</span>
                                <h2>Advanda Cro</h2>
                                <p>Please done this project as soon possible.
                                </p>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <div className="message-img">
                                <img src="img/contact/4.jpg" alt />
                              </div>
                              <div className="message-content">
                                <span className="message-date">16 Sept</span>
                                <h2>Sulaiman din</h2>
                                <p>Please done this project as soon possible.
                                </p>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <div className="message-img">
                                <img src="img/contact/3.jpg" alt />
                              </div>
                              <div className="message-content">
                                <span className="message-date">16 Sept</span>
                                <h2>Victor Jara</h2>
                                <p>Please done this project as soon possible.
                                </p>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <div className="message-img">
                                <img src="img/contact/2.jpg" alt />
                              </div>
                              <div className="message-content">
                                <span className="message-date">16 Sept</span>
                                <h2>Victor Jara</h2>
                                <p>Please done this project as soon possible.
                                </p>
                              </div>
                            </a>
                          </li>
                        </ul>
                        <div className="message-view">
                          <a href="#">View All Messages</a>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item"><a href="#" data-toggle="dropdown" role="button" aria-expanded="false" className="nav-link dropdown-toggle"><i className="educate-icon educate-bell" aria-hidden="true" /><span className="indicator-nt" /></a>
                      <div role="menu" className="notification-author dropdown-menu animated zoomIn">
                        <div className="notification-single-top">
                          <h1>Notifications</h1>
                        </div>
                        <ul className="notification-menu">
                          <li>
                            <a href="#">
                              <div className="notification-icon">
                                <i className="educate-icon educate-checked edu-checked-pro admin-check-pro" aria-hidden="true" />
                              </div>
                              <div className="notification-content">
                                <span className="notification-date">16 Sept</span>
                                <h2>Advanda Cro</h2>
                                <p>Please done this project as soon possible.
                                </p>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <div className="notification-icon">
                                <i className="fa fa-cloud edu-cloud-computing-down" aria-hidden="true" />
                              </div>
                              <div className="notification-content">
                                <span className="notification-date">16 Sept</span>
                                <h2>Sulaiman din</h2>
                                <p>Please done this project as soon possible.
                                </p>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <div className="notification-icon">
                                <i className="fa fa-eraser edu-shield" aria-hidden="true" />
                              </div>
                              <div className="notification-content">
                                <span className="notification-date">16 Sept</span>
                                <h2>Victor Jara</h2>
                                <p>Please done this project as soon possible.
                                </p>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <div className="notification-icon">
                                <i className="fa fa-line-chart edu-analytics-arrow" aria-hidden="true" />
                              </div>
                              <div className="notification-content">
                                <span className="notification-date">16 Sept</span>
                                <h2>Victor Jara</h2>
                                <p>Please done this project as soon possible.
                                </p>
                              </div>
                            </a>
                          </li>
                        </ul>
                        <div className="notification-view">
                          <a href="#">View All Notification</a>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a href="#" data-toggle="dropdown" role="button" aria-expanded="false" className="nav-link dropdown-toggle">
                        <img src="img/product/pro4.jpg" alt />
                        <span className="admin-name">Prof.Anderson</span>
                        <i className="fa fa-angle-down edu-icon edu-down-arrow" />
                      </a>
                      <ul role="menu" className="dropdown-header-top author-log dropdown-menu animated zoomIn">
                        <li><a href="#"><span className="edu-icon edu-home-admin author-log-ic" />My
                            Account</a>
                        </li>
                        <li><a href="#"><span className="edu-icon edu-user-rounded author-log-ic" />My
                            Profile</a>
                        </li>
                        <li><a href="#"><span className="edu-icon edu-money author-log-ic" />User
                            Billing</a>
                        </li>
                        <li><a href="#"><span className="edu-icon edu-settings author-log-ic" />Settings</a>
                        </li>
                        <li><a href="#"><span className="edu-icon edu-locked author-log-ic" />Log
                            Out</a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item nav-setting-open"><a href="#" data-toggle="dropdown" role="button" aria-expanded="false" className="nav-link dropdown-toggle"><i className="educate-icon educate-menu" /></a>
                      <div role="menu" className="admintab-wrap menu-setting-wrap menu-setting-wrap-bg dropdown-menu animated zoomIn">
                        <ul className="nav nav-tabs custon-set-tab">
                          <li className="active"><a data-toggle="tab" href="#Notes">Notes</a>
                          </li>
                          <li><a data-toggle="tab" href="#Projects">Projects</a>
                          </li>
                          <li><a data-toggle="tab" href="#Settings">Settings</a>
                          </li>
                        </ul>
                        <div className="tab-content custom-bdr-nt">
                          <div id="Notes" className="tab-pane fade in active">
                            <div className="notes-area-wrap">
                              <div className="note-heading-indicate">
                                <h2><i className="fa fa-comments-o" /> Latest
                                  Notes</h2>
                                <p>You have 10 new message.</p>
                              </div>
                              <div className="notes-list-area notes-menu-scrollbar">
                                <ul className="notes-menu-list">
                                  <li>
                                    <a href="#">
                                      <div className="notes-list-flow">
                                        <div className="notes-img">
                                          <img src="img/contact/4.jpg" alt />
                                        </div>
                                        <div className="notes-content">
                                          <p> The point of using Lorem
                                            Ipsum is that it has a
                                            more-or-less normal.</p>
                                          <span>Yesterday 2:45
                                            pm</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <div className="notes-list-flow">
                                        <div className="notes-img">
                                          <img src="img/contact/1.jpg" alt />
                                        </div>
                                        <div className="notes-content">
                                          <p> The point of using Lorem
                                            Ipsum is that it has a
                                            more-or-less normal.</p>
                                          <span>Yesterday 2:45
                                            pm</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <div className="notes-list-flow">
                                        <div className="notes-img">
                                          <img src="img/contact/2.jpg" alt />
                                        </div>
                                        <div className="notes-content">
                                          <p> The point of using Lorem
                                            Ipsum is that it has a
                                            more-or-less normal.</p>
                                          <span>Yesterday 2:45
                                            pm</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <div className="notes-list-flow">
                                        <div className="notes-img">
                                          <img src="img/contact/3.jpg" alt />
                                        </div>
                                        <div className="notes-content">
                                          <p> The point of using Lorem
                                            Ipsum is that it has a
                                            more-or-less normal.</p>
                                          <span>Yesterday 2:45
                                            pm</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <div className="notes-list-flow">
                                        <div className="notes-img">
                                          <img src="img/contact/4.jpg" alt />
                                        </div>
                                        <div className="notes-content">
                                          <p> The point of using Lorem
                                            Ipsum is that it has a
                                            more-or-less normal.</p>
                                          <span>Yesterday 2:45
                                            pm</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <div className="notes-list-flow">
                                        <div className="notes-img">
                                          <img src="img/contact/1.jpg" alt />
                                        </div>
                                        <div className="notes-content">
                                          <p> The point of using Lorem
                                            Ipsum is that it has a
                                            more-or-less normal.</p>
                                          <span>Yesterday 2:45
                                            pm</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <div className="notes-list-flow">
                                        <div className="notes-img">
                                          <img src="img/contact/2.jpg" alt />
                                        </div>
                                        <div className="notes-content">
                                          <p> The point of using Lorem
                                            Ipsum is that it has a
                                            more-or-less normal.</p>
                                          <span>Yesterday 2:45
                                            pm</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <div className="notes-list-flow">
                                        <div className="notes-img">
                                          <img src="img/contact/1.jpg" alt />
                                        </div>
                                        <div className="notes-content">
                                          <p> The point of using Lorem
                                            Ipsum is that it has a
                                            more-or-less normal.</p>
                                          <span>Yesterday 2:45
                                            pm</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <div className="notes-list-flow">
                                        <div className="notes-img">
                                          <img src="img/contact/2.jpg" alt />
                                        </div>
                                        <div className="notes-content">
                                          <p> The point of using Lorem
                                            Ipsum is that it has a
                                            more-or-less normal.</p>
                                          <span>Yesterday 2:45
                                            pm</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <div className="notes-list-flow">
                                        <div className="notes-img">
                                          <img src="img/contact/3.jpg" alt />
                                        </div>
                                        <div className="notes-content">
                                          <p> The point of using Lorem
                                            Ipsum is that it has a
                                            more-or-less normal.</p>
                                          <span>Yesterday 2:45
                                            pm</span>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div id="Projects" className="tab-pane fade">
                            <div className="projects-settings-wrap">
                              <div className="note-heading-indicate">
                                <h2><i className="fa fa-cube" /> Latest projects
                                </h2>
                                <p> You have 20 projects. 5 not completed.</p>
                              </div>
                              <div className="project-st-list-area project-st-menu-scrollbar">
                                <ul className="projects-st-menu-list">
                                  <li>
                                    <a href="#">
                                      <div className="project-list-flow">
                                        <div className="projects-st-heading">
                                          <h2>Web Development</h2>
                                          <p> The point of using Lorem
                                            Ipsum is that it has a
                                            more or less normal.</p>
                                          <span className="project-st-time">1
                                            hours ago</span>
                                        </div>
                                        <div className="projects-st-content">
                                          <p>Completion with: 28%</p>
                                          <div className="progress progress-mini">
                                            <div style={{width: '28%'}} className="progress-bar progress-bar-danger hd-tp-1">
                                            </div>
                                          </div>
                                          <p>Project end: 4:00 pm -
                                            12.06.2014</p>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <div className="project-list-flow">
                                        <div className="projects-st-heading">
                                          <h2>Software Development
                                          </h2>
                                          <p> The point of using Lorem
                                            Ipsum is that it has a
                                            more or less normal.</p>
                                          <span className="project-st-time">2
                                            hours ago</span>
                                        </div>
                                        <div className="projects-st-content project-rating-cl">
                                          <p>Completion with: 68%</p>
                                          <div className="progress progress-mini">
                                            <div style={{width: '68%'}} className="progress-bar hd-tp-2">
                                            </div>
                                          </div>
                                          <p>Project end: 4:00 pm -
                                            12.06.2014</p>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <div className="project-list-flow">
                                        <div className="projects-st-heading">
                                          <h2>Graphic Design</h2>
                                          <p> The point of using Lorem
                                            Ipsum is that it has a
                                            more or less normal.</p>
                                          <span className="project-st-time">3
                                            hours ago</span>
                                        </div>
                                        <div className="projects-st-content">
                                          <p>Completion with: 78%</p>
                                          <div className="progress progress-mini">
                                            <div style={{width: '78%'}} className="progress-bar hd-tp-3">
                                            </div>
                                          </div>
                                          <p>Project end: 4:00 pm -
                                            12.06.2014</p>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <div className="project-list-flow">
                                        <div className="projects-st-heading">
                                          <h2>Web Design</h2>
                                          <p> The point of using Lorem
                                            Ipsum is that it has a
                                            more or less normal.</p>
                                          <span className="project-st-time">4
                                            hours ago</span>
                                        </div>
                                        <div className="projects-st-content project-rating-cl2">
                                          <p>Completion with: 38%</p>
                                          <div className="progress progress-mini">
                                            <div style={{width: '38%'}} className="progress-bar progress-bar-danger hd-tp-4">
                                            </div>
                                          </div>
                                          <p>Project end: 4:00 pm -
                                            12.06.2014</p>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <div className="project-list-flow">
                                        <div className="projects-st-heading">
                                          <h2>Business Card</h2>
                                          <p> The point of using Lorem
                                            Ipsum is that it has a
                                            more or less normal.</p>
                                          <span className="project-st-time">5
                                            hours ago</span>
                                        </div>
                                        <div className="projects-st-content">
                                          <p>Completion with: 28%</p>
                                          <div className="progress progress-mini">
                                            <div style={{width: '28%'}} className="progress-bar progress-bar-danger hd-tp-5">
                                            </div>
                                          </div>
                                          <p>Project end: 4:00 pm -
                                            12.06.2014</p>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <div className="project-list-flow">
                                        <div className="projects-st-heading">
                                          <h2>Ecommerce Business</h2>
                                          <p> The point of using Lorem
                                            Ipsum is that it has a
                                            more or less normal.</p>
                                          <span className="project-st-time">6
                                            hours ago</span>
                                        </div>
                                        <div className="projects-st-content project-rating-cl">
                                          <p>Completion with: 68%</p>
                                          <div className="progress progress-mini">
                                            <div style={{width: '68%'}} className="progress-bar hd-tp-6">
                                            </div>
                                          </div>
                                          <p>Project end: 4:00 pm -
                                            12.06.2014</p>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <div className="project-list-flow">
                                        <div className="projects-st-heading">
                                          <h2>Woocommerce Plugin</h2>
                                          <p> The point of using Lorem
                                            Ipsum is that it has a
                                            more or less normal.</p>
                                          <span className="project-st-time">7
                                            hours ago</span>
                                        </div>
                                        <div className="projects-st-content">
                                          <p>Completion with: 78%</p>
                                          <div className="progress progress-mini">
                                            <div style={{width: '78%'}} className="progress-bar">
                                            </div>
                                          </div>
                                          <p>Project end: 4:00 pm -
                                            12.06.2014</p>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <div className="project-list-flow">
                                        <div className="projects-st-heading">
                                          <h2>Wordpress Theme</h2>
                                          <p> The point of using Lorem
                                            Ipsum is that it has a
                                            more or less normal.</p>
                                          <span className="project-st-time">9
                                            hours ago</span>
                                        </div>
                                        <div className="projects-st-content project-rating-cl2">
                                          <p>Completion with: 38%</p>
                                          <div className="progress progress-mini">
                                            <div style={{width: '38%'}} className="progress-bar progress-bar-danger">
                                            </div>
                                          </div>
                                          <p>Project end: 4:00 pm -
                                            12.06.2014</p>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div id="Settings" className="tab-pane fade">
                            <div className="setting-panel-area">
                              <div className="note-heading-indicate">
                                <h2><i className="fa fa-gears" /> Settings Panel
                                </h2>
                                <p> You have 20 Settings. 5 not completed.</p>
                              </div>
                              <ul className="setting-panel-list">
                                <li>
                                  <div className="checkbox-setting-pro">
                                    <div className="checkbox-title-pro">
                                      <h2>Show notifications</h2>
                                      <div className="ts-custom-check">
                                        <div className="onoffswitch">
                                          <input type="checkbox" name="collapsemenu" className="onoffswitch-checkbox" id="example" />
                                          <label className="onoffswitch-label" htmlFor="example">
                                            <span className="onoffswitch-inner" />
                                            <span className="onoffswitch-switch" />
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="checkbox-setting-pro">
                                    <div className="checkbox-title-pro">
                                      <h2>Disable Chat</h2>
                                      <div className="ts-custom-check">
                                        <div className="onoffswitch">
                                          <input type="checkbox" name="collapsemenu" className="onoffswitch-checkbox" id="example3" />
                                          <label className="onoffswitch-label" htmlFor="example3">
                                            <span className="onoffswitch-inner" />
                                            <span className="onoffswitch-switch" />
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="checkbox-setting-pro">
                                    <div className="checkbox-title-pro">
                                      <h2>Enable history</h2>
                                      <div className="ts-custom-check">
                                        <div className="onoffswitch">
                                          <input type="checkbox" name="collapsemenu" className="onoffswitch-checkbox" id="example4" />
                                          <label className="onoffswitch-label" htmlFor="example4">
                                            <span className="onoffswitch-inner" />
                                            <span className="onoffswitch-switch" />
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="checkbox-setting-pro">
                                    <div className="checkbox-title-pro">
                                      <h2>Show charts</h2>
                                      <div className="ts-custom-check">
                                        <div className="onoffswitch">
                                          <input type="checkbox" name="collapsemenu" className="onoffswitch-checkbox" id="example7" />
                                          <label className="onoffswitch-label" htmlFor="example7">
                                            <span className="onoffswitch-inner" />
                                            <span className="onoffswitch-switch" />
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="checkbox-setting-pro">
                                    <div className="checkbox-title-pro">
                                      <h2>Update everyday</h2>
                                      <div className="ts-custom-check">
                                        <div className="onoffswitch">
                                          <input type="checkbox" name="collapsemenu" defaultChecked className="onoffswitch-checkbox" id="example2" />
                                          <label className="onoffswitch-label" htmlFor="example2">
                                            <span className="onoffswitch-inner" />
                                            <span className="onoffswitch-switch" />
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="checkbox-setting-pro">
                                    <div className="checkbox-title-pro">
                                      <h2>Global search</h2>
                                      <div className="ts-custom-check">
                                        <div className="onoffswitch">
                                          <input type="checkbox" name="collapsemenu" defaultChecked className="onoffswitch-checkbox" id="example6" />
                                          <label className="onoffswitch-label" htmlFor="example6">
                                            <span className="onoffswitch-inner" />
                                            <span className="onoffswitch-switch" />
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="checkbox-setting-pro">
                                    <div className="checkbox-title-pro">
                                      <h2>Offline users</h2>
                                      <div className="ts-custom-check">
                                        <div className="onoffswitch">
                                          <input type="checkbox" name="collapsemenu" defaultChecked className="onoffswitch-checkbox" id="example5" />
                                          <label className="onoffswitch-label" htmlFor="example5">
                                            <span className="onoffswitch-inner" />
                                            <span className="onoffswitch-switch" />
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>




</div>
</div>
            )
        }
    }