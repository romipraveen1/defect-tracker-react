import React, {Component} from 'react';

export default class Content extends Component {

  constructor(props) {
    super(props);
    this.state = {
        Developer: [],
        post:[],
        projectId:"",
        projectName:""
        
    };
  
}


  componentDidMount() {
    let url = "http://localhost:8080/library/findProject"
    console.log(url);
    fetch(url)
        .then(resp => resp.json())
        
        .then(data => {
          console.log(data)
            let Developer = data.map((post) => {
                return (  
                  <option value={post.projectId} >{post.projectName}</option>
                    
                )
            })
            this.setState({ Developer: Developer });
        })
  
  }





    render(){

      const {item,item1,handleChange,handleChange1,handleSubmit}= this.props

        return (
            
          

            <div className="single-pro-review-area mt-t-30 mg-b-15">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="product-payment-inner-st">
                <ul id="myTabedu1" className="tab-review-design">
                  <li className="active"><a href="#description">ADD Modules</a></li>
                </ul>
                <div id="myTabContent" className="tab-content custom-product-edit">
                  <div className="product-tab-list tab-pane fade active in" id="description">
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="review-content-section">
                          <div className="row">



                          <form onSubmit={handleSubmit}>
                            <div className="form-group">
                              <label><b>Module Name :</b></label>
                              <input type="text" className="form-control"  placeholder="Enter Module Name"  value={item} onChange={handleChange} id="moduleName" />
                            </div>
                            <div className="form-group">
                              <label><b>Project Name :</b></label>
                              {/* <input type="text" className="form-control"  placeholder="Enter project Name"  value={item1} onChange={handleChange1} id="projectId" /> */}
                              <select id="moduleId" className="form-control" name="projectId" value={item1} onChange={handleChange1} id="projectId">
                                
                                {this.state.Developer} 
                                </select>
                            </div>
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="payment-adress">
                                  <button type="submit" id="blog_post_submit" className="btn btn-primary waves-effect waves-light">Add Module</button>
                                </div>
                              </div>
                            </div>
                            </form>



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
      </div>

                
        );
    }
    }