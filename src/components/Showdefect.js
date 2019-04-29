
import React, { Component } from 'react';
import {Deletedefect} from './action/jsonfetch/Fetchdelete';
import {Editdefect} from './action/jsonfetch/Editdefect';
import Editdefectfrom from './Editdefectform';
import {Edit1} from './Editdefectform';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';

class Show extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Defects: [],
            Edit:""
        };
    }

    // state={
    //     defectId:"",
    //   }
    //   delete = e =>{
    //     this.setState({
    //         post: e.target.value
           
    //     });
    //     console.log(defectId);
    // }
    delete(e){
        Deletedefect(e)
    }

    update(Edit){
       console.log(Edit)
       // Editdefect(e)
      // this.setState({ Edit });
     // Editdefectfrom.Edit1(Edit)

    }

       



    componentDidMount() {
       
        let url = "http://localhost:8080/library/findDefect"
        console.log(url);
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
               
                let Defects = data.map((post, index) => {
                    console.log(post);
                    const {onclick}= this.props

                    return (
                        <div key={index}>
                            <table class="table">
                                <tbody >
                                    <tr>
                                        <td col width="150px">{post.defectId}</td>
                                        <td col width="150px">{post.module}</td>
                                        <td col width="150px">{post.description}</td>
                                        <td col width="150px">{post.recreate}</td>
                                        <td col width="150px">{post.severity}</td>
                                        <td col width="150px">{post.priority}</td>
                                        <td col width="150px">{post.defectType}</td>
                                        <td col width="150px">{post.assignTo}</td>
                                        <td col width="150px">{post.status}</td>
                                        <td col width="150px">
                                        <ButtonGroup>
            <Button size="sm" color="primary" tag={Link} to={"/Editdefectfrom/" + post.id}>Edit</Button>
            <Button size="sm" color="danger" onClick={() => this.delete(post.id)}>Delete</Button>
          </ButtonGroup>
                                            {/* <button data-toggle="tooltip" title="Edit" class="pd-setting-ed" tag={Link} to={"/Editdefectfrom/" + post.id} onClick={this.update.bind(this,post.id)}><i
                                                class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                                            <button data-toggle="tooltip" title="Trash" class="pd-setting-ed" name="defectId"
                                             onClick={this.delete.bind(this,post.id)}><i
                                                class="fa fa-trash-o" aria-hidden="true"></i></button> */}
                                        </td>
                                    </tr></tbody>

                            </table>
                        </div>
                    )
                })
                this.setState({ Defects: Defects });
            })

    }

    render() {
        return (
            <div className="all-content-wrapper" style={{ marginLeft: '60px' }}>
              {/* <Editdefectfrom />  */}
                <div className="App">
                    <table class="table table-dark" bgcolor="black">

                        <thead class="bg-danger">
                            <tr>
                                <th scope="col" col width="150px">Defect ID</th>
                                <th scope="col" col width="150px">module Name</th>
                                <th scope="col" col width="150px">Description</th>
                                <th scope="col" col width="150px">Recreate</th>
                                <th scope="col" col width="150px">Serverity</th>
                                <th scope="col" col width="150px">Priority</th>
                                <th scope="col" col width="150px">Defct Type</th>
                                <th scope="col" col width="150px">Assignto</th>
                                <th scope="col" col width="150px">Status</th>
                                <th scope="col" col width="150px">Edit/Delete</th>
                            </tr>
                        </thead>
                    </table>
                    {this.state.Defects}
                </div>
            </div>
        );
    }

}

export default Show;
