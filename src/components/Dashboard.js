import React, {Component} from 'react';

export default class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
        x:0,
        y:0,
        z:0,
        l:0,
        m:0,
        n:0
    };
}

  componentDidMount() {
    let url = "http://localhost:8080/library/findDefect"
    console.log(url);
    fetch(url)
        .then(resp => resp.json())
        .then(data => {
           
                console.log(data);

                var x=0;
                var y=0;
                var z=0;
                var l=0;
                var m=0;
                var n=0;
               for(var i=0;i<data.length;i++){
                if((data[i].status)=="fixed"){
                    x=x+1;    
                }
                else if((data[i].status)=="open"){
                  y=y+1
                }
                else if((data[i].status)=="reopened"){
                  z=z+1
                }
                else if((data[i].status)=="closed"){
                  l=l+1
                }
                else if((data[i].status)=="rejected"){
                  m=m+1
                }
                else if((data[i].status)=="new"){
                  n=n+1
                }
               
              }
              console.log(z);
            
              this.setState({ x: x });
              this.setState({ y: y });
              this.setState({ z: z });
              this.setState({ l: l });
              this.setState({ m: m });
              this.setState({ n: n });
              
           
        })

}
    render(){

    


        return (
          
     
            <div className="all-content-wrapper">
            <div className="breadcome-area">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="breadcome-list">
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
                            <li><a href="#">Home</a> <span className="bread-slash">/</span>
                            </li>
                            <li><span className="bread-blod">Dashboard V.1</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="analytics-sparkle-area">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12">
                    <div className="analytics-sparkle-line reso-mg-b-30">
                      <div className="analytics-content">
                        <h5>Open Projects</h5>
                        <h2><span className="counter">{this.state.y}</span>
                        </h2>
                        <span className="text-success"> {(this.state.y)*10}%</span>
                        <div className="progress m-b-0">
                          <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '20%'}}> <span className="sr-only">2% Complete</span> </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12">
                    <div className="analytics-sparkle-line reso-mg-b-30">
                      <div className="analytics-content">
                        <h5>Re-opened</h5>
                        <h2><span className="counter">{this.state.z}
                          </span></h2>
                        <span className="text-danger">{(this.state.z)*10}%</span>
                        <div className="progress m-b-0">
                          <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '40%'}}> <span className="sr-only">40% Complete</span> </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12">
                    <div className="analytics-sparkle-line reso-mg-b-30 table-mg-t-pro dk-res-t-pro-30">
                      <div className="analytics-content">
                        <h5>Closed Projects</h5>
                        <h2><span className="counter">{this.state.l}</span>
                        </h2>
                        <span className="text-info">{(this.state.l)*10}%</span>
                        <div className="progress m-b-0">
                          <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '30%'}}> <span className="sr-only">30% Complete</span> </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12">
                    <div className="analytics-sparkle-line table-mg-t-pro dk-res-t-pro-30">
                      <div className="analytics-content">
                        <h5>New Projects</h5>
                        <h2><span className="counter">{this.state.n}</span>
                        </h2>
                        <span className="text-inverse">{(this.state.n)*10}%</span>
                        <div className="progress m-b-0">
                          <div className="progress-bar progress-bar-inverse" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '4%'}}> <span className="sr-only">4% Complete</span> </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12">
                    <div className="analytics-sparkle-line table-mg-t-pro dk-res-t-pro-30">
                      <div className="analytics-content">
                        <h5>Fixed Projects</h5>
                        <h2><span className="counter"> {this.state.x} </span>
                        </h2>
                        <span className="text-inverse"> {(this.state.x)*10}%</span>
                        <div className="progress m-b-0">
                          <div className="progress-bar progress-bar-inverse" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '4%'}}> <span className="sr-only">4% Complete</span> </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12">
                    <div className="analytics-sparkle-line table-mg-t-pro dk-res-t-pro-30">
                      <div className="analytics-content">
                        <h5>Rejected</h5>
                        <h2><span className="counter">{this.state.m}</span>
                        </h2>
                        <span className="text-inverse">{(this.state.m)*10}%</span>
                        <div className="progress m-b-0">
                          <div className="progress-bar progress-bar-inverse" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '2%'}}> <span className="sr-only">2% Complete</span> </div>
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