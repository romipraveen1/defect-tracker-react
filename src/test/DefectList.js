import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';

import { Link } from 'react-router-dom';

class DefectList extends Component {

  constructor(props) {
    super(props);
    this.state = {defects: [], isLoading: true};
    this.remove = this.remove.bind(this);
  }

  componentDidMount() {
    this.setState({isLoading: true});

    fetch('http://localhost:8080/library/findDefect')
      .then(response => response.json())
      .then(data => this.setState({defects: data, isLoading: false}));
  }

  async remove(id) {
    await fetch(`http://localhost:8080/library/delete/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => {
      let updatedDefect = [...this.state.defects].filter(i => i.id !== id);
      this.setState({defects: updatedDefect});
    });
  }

  render() {
    const {defects, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    const defectList = defects.map(post => {
   
      return <tr key={post.id}>
        <td style={{whiteSpace: 'nowrap'}}>{post.defectId}</td>
        <td>{post.module}</td>
        <td>{post.description}</td>
        <td>{post.recreate}</td>
        <td>{post.severity}</td>
        <td>{post.priority}</td>
        <td>{post.defectType}</td>
        <td>{post.assignTo}</td>
        <td>{post.status}</td>
        <td>
          <ButtonGroup>
            <Button size="sm" color="primary" tag={Link} to={"/groups/" + post.id}>Edit</Button>
            <Button size="sm" color="danger" onClick={() => this.remove(post.id)}>Delete</Button>
          </ButtonGroup>
        </td>
      </tr>
    });

    return (
      <div className="all-content-wrapper">
        
        <Container fluid>
          {/* <div className="float-right">
            <Button color="success" tag={Link} to="/groups/new">Add Defect</Button>
          </div> */}
         
          <Table className="mt-4">
            <thead>
            <tr>
              <th >defectId</th>
              <th >module</th>
              <th>description</th>
              <th>recreate</th>
              <th>severity</th>
              <th>priority</th>
              <th>defectType</th>
              <th>assignTo</th>
              <th>status</th>
              
              <th width="10%">Actions</th>
            </tr>
            </thead>
            <tbody>
            {defectList}
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}
export default DefectList;