import React, {Component} from 'react'
import  SideBar  from '../core/Sidebar';
import  Content  from '../components/Addmodule';
import  Header  from '../core/Header';
import  Adddefect  from '../components/Adddefect';
import  Dashboard  from '../components/Dashboard';
import  Adddevelopers from '../components/Adddeveloper';
import Showdefect from '../components/Showdefect';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Addproject from '../components/Addproject';
import Login from '../core/Login';
import Register from '../core/Register';
import Editdefectform from './Editdefectform';
import DefectList from '../test/DefectList';
import { BrowserRouter as Switch } from 'react-router-dom';
import DefectEdit from '../test/DefectEdit';



class Routers extends Component {
    render() {
        return(
            
            <Router>
               <Switch>
            <div>
            {/* <Sanv/> */}
            <SideBar/>
            <Header/> 
           
            {/* <Register/> */}
            {/* <Login/> */}
              
              {/* <Route exact path="/" Component={Dashboard}/> */}
              <Route path='/groups/:id' component={DefectEdit}/>
       
              <Route path="/" exact strict render={
                    () =>{
                       return(  <Dashboard/>);
                     }
                   }/>
        
        <Route path="/Dashboard" exact strict render={
                    () =>{
                      return(  <Dashboard/>);
                    }
                  }/>
        
            <Route path="/Adddefect" exact strict render={
                    () =>{
                      return( <Adddefect/>);
                    }
                  }/>
        
            <Route path="/Addmodule" exact strict render={
                          () =>{
                            return( <Content/>);
                          }
                        }/>
        
          <Route path="/Adddevelopers" exact strict render={
                              () =>{
                                return(  <Adddevelopers/>);
                              }
                            }/>
        
        <Route path="/Addproject" exact strict render={
                              () =>{
                                return(  <Addproject/>);
                              }
                            }/>
        
        <Route path="/Register" exact strict render={
                              () =>{
                                return(  <Register/>);
                              }
                            }/>
         {/* <Route path='/Editdefectform/:id' component={Editdefectform}/> */}
         {/* <Route path='/Editdefectform/:id' exact strict render={
                              () =>{
                                return( 
                                  <div className="all-content-wrapper">
                                  <br/>
                                   <Editdefectform/>
                                   </div>);
                              }
                            }/> */}
                             
        {/* <Route path="/Editdefectform" exact strict render={
                              () =>{
                                return( 
                                  <div className="all-content-wrapper">
                                  <br/>
                                   <Editdefectform/>
                                   </div>);
                              }
                            }/> */}
        
        <Route path="/Showdefect" exact strict render={
                              () =>{
                                return( 
                                  <DefectList/>
                                   );     
                              }
                            }/>
      <Route path="/DefectList" exact strict render={
                              () =>{
                                return( 
                                  <DefectList/>
                                   );   
                              }
                            }/>
      
            </div>
            </Switch>
            </Router>
        );
}

}

export default Routers;
