import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import {editdefect} from '../components/action/jsonfetch/Editdefect';


class DefectEdit extends Component {

  emptyItem = {
   
    defectId: '',
    module: '',
    description: '',
    steps: '',
    severity: '',
    priority: '',
    defectType: '',
    assignTo: '',
    status: ''
   
  };

  constructor(props) {
    super(props);
    this.state = {
      item: this.emptyItem
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    if (this.props.match.params.id !== 'new') {
      const group = await (await fetch(`http://localhost:8080/library/findid/${this.props.match.params.id}`)).json();
      this.setState({item: group});
    }

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
  select(id){
    console.log(id)
    let url1 = `http://localhost:8080/library/findmodule/${id}`;
        console.log(url1);
        fetch(url1)
            .then(resp => resp.json())
            
            .then(data => {
              console.log(data)
             
                let x = data.developer.map((post) => {
                    return ( 
                      <option value={post.id} >{ post.developerName}</option>  
                    )
                })
                this.setState({ x:data });
            })
  }

  handleChange(e) {
    const target = e.target;
    
    const value = target.value;
    
    const name = target.name;
    let item = {...this.state.item};
    item[name] = value;
    this.setState({item});


  }

  async handleSubmit(e) {
    e.preventDefault();
    const {item} = this.state;
    console.log(item)
    editdefect(item,item.id)

  }
  render() {
    const {item} = this.state;
    const title = <h2>{item.id ? 'Edit Defect' : 'Add Defect'}</h2>;

    return <div className="all-content-wrapper">
    
      <Container>
        {title}
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="name">defectId</Label>
            <Input type="text" name="defectId" id="defectId" value={item.defectId || ''}
                   onChange={this.handleChange} autoComplete="name"/>
          </FormGroup>
          <FormGroup>
            <Label for="address">module</Label>
            {/* <Input type="text" name="module" id="module" value={item.module || ''}
                   onChange={this.handleChange} autoComplete="address-level1"/> */}
                   <select className="form-control" name="module" id="module" value={item.module || ''} onChange={this.handleChange  }   autoComplete="address-level1">
                                  {this.state.Developer}
                                  </select>
          </FormGroup>
          <FormGroup>
            <Label for="city">description</Label>
            <Input type="text" name="description" id="description" value={item.description || ''}
                   onChange={this.handleChange} autoComplete="address-level1"/>
          </FormGroup>
          <FormGroup className="col-md-3 mb-3">
              <Label for="country">defectType</Label>
              {/* <Input type="text" name="defectType" id="defectType" value={item.defectType || ''}
                     onChange={this.handleChange} autoComplete="address-level1"/> */}
                      <Input type="select" name="defectType" id="defectType" value={item.defectType || ''} onChange={this.handleChange} autoComplete="address-level1">
                      <option>UI</option>
                      <option>Functionality</option>
                      <option>Enhancement</option>
                      <option>Performance</option>
                      </Input>
            </FormGroup>
          <div className="row">
            <FormGroup className="col-md-4 mb-3">
              <Label for="stateOrProvince">steps</Label>
              <Input type="text" name="steps" id="steps" value={item.steps || ''}
                     onChange={this.handleChange} autoComplete="address-level1"/>
            </FormGroup>
            <FormGroup className="col-md-5 mb-3">
              <Label for="country">severity</Label>

                                  <Input type="select" name="severity" id="severity" value={item.severity || ''} onChange={this.handleChange} autoComplete="address-level1">
                                  <option value="High">High</option>
                                    <option>Medium</option>
                                    <option>Low</option>
          </Input>
            </FormGroup>
            <FormGroup className="col-md-3 mb-3">
              <Label for="country">priority</Label>
              {/* <Input type="text" name="priority" id="priority" value={item.priority || ''}
                     onChange={this.handleChange} autoComplete="address-level1"/> */}
                      <Input type="select" name="priority" id="priority" value={item.priority || ''} onChange={this.handleChange} autoComplete="address-level1">
                                  <option value="High">High</option>
                                    <option>Medium</option>
                                    <option>Low</option>
          </Input>
            </FormGroup>
            <FormGroup className="col-md-3 mb-3">
              <Label for="country">assignTo</Label>
              {/* <Input type="text" name="assignTo" id="assignTo" value={item.assignTo || ''}
                     onChange={this.handleChange} autoComplete="address-level1"/> */}
                      <select className="form-control" name="assignTo" id="assignTo" value={item.assignTo || ''} onChange={this.handleChange } autoComplete="address-level1">
                                  {this.state.x}
                                  </select>
            </FormGroup>
            <FormGroup className="col-md-3 mb-3">
              <Label for="country">status</Label>
              {/* <Input type="text" name="status" id="status" value={item.status || ''}
                     onChange={this.handleChange} autoComplete="address-level1"/> */}
                     <Input type="select" name="status" id="status" value={item.status || ''} onChange={this.handleChange} autoComplete="address-level1">
                                    <option>new</option>
                                    <option>open</option>
                                    <option>fixed</option>
                                    <option>closed</option>
                                    <option>reopened</option>
                                    <option>rejected</option>
                                    <option>deffered</option>
          </Input>
            </FormGroup>
          </div>
          <FormGroup>
            <Button color="primary" type="submit">Save</Button>{' '}
            <Button color="secondary" tag={Link} to="/DefectList">Cancel</Button>
          </FormGroup>
        </Form>
      </Container>
    </div>
  }
}

export default withRouter(DefectEdit);