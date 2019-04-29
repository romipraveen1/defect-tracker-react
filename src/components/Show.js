import React, { Component } from 'react';


class Show extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Defects: []
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
   



    componentDidMount() {
        let url = "http://localhost:8080/library/findmodule/1"
        console.log(url);
       fetch(url)
            .then(resp => resp.json())
            .then(data => {
                for(var i=0; i<3;i++)
                {
                    console.log(
                  
                        data.developer[i].developerName);
                }
              
                // let Defects = data.map((post, index) => {
                //     return (
                //         <div key={index}>
                //             <table class="table">
                //                 <tbody >
                //                     <tr>
                //                         <td col width="150px">{post.defectId}</td>
                //                         <td col width="150px">{post.moduleName}</td>
                //                         <td col width="150px">{post.description}</td>
                //                         <td col width="150px">{post.recreate}</td>
                //                         <td col width="150px">{post.severity}</td>
                //                         <td col width="150px">{post.priority}</td>
                //                         <td col width="150px">{post.defectType}</td>
                //                         <td col width="150px">{post.assignTo}</td>
                //                         <td col width="150px">{post.status}</td>
                //                         <td col width="150px">
                //                             <button data-toggle="tooltip" title="Edit" class="pd-setting-ed"><i
                //                                 class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                //                             <button data-toggle="tooltip" title="Trash" class="pd-setting-ed" name="defectId"
                //                              onClick={this.delete.bind(this,post.defectId)}><i
                //                                 class="fa fa-trash-o" aria-hidden="true"></i></button>
                //                         </td>
                //                     </tr></tbody>

                //             </table>
                //         </div>
                //     )
                // })
                // this.setState({ Defects: Defects });
            })

    }

    render() {
        return (
            <div className="all-content-wrapper" style={{ marginLeft: '60px' }}>
                {/* <div className="App">
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
                </div> */}
                <button type="submit" onClick={this.componentDidMount}>sub</button>
            </div>
        );
    }

}

export default Show;
