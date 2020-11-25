import React  from 'react'
import './Show.css'
import {Link} from 'react-router-dom'


export default class Show extends React.Component {
  constructor(){
      super();
      this.state={
          name:""
      }
  }

  displayProduct =()=>{
      this.setState({
          name:<Child />
      })
  } 
  displayProduct1 =()=>{
      this.setState({
          name:<Child1 />
      })
  } 
  displayProduct2 =()=>{
      this.setState({
          name:<Child2 />
      })
  } 
  displayProduct3 =()=>{
      this.setState({
          name:<Child3 />
      })
  } 
 
 
         render() {
      return (
          <div> 

            <nav class="navbar navbar-expand-lg navbar-light bg-info">
  <Link class="navbar-brand" href="#"><b>Mobile Store</b></Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      
      <li class="nav-item active">
        <Link class="nav-link" href="#">Show Mobiles</Link>
      </li>
      <li class="nav-item7 active">
        <Link class="nav-link" to="/Home">Logout</Link>
      </li>
    </ul>
  </div>
</nav>  


<div class="container" >
 <div>{this.state.name} </div>
</div>
              <div className="container">
             
         {/* card */}
         <div className="card-deck">
<div class="card" id="c1">
  <img className="showimg" src="https://ukeyy.com/wp-content/uploads/2018/02/melkco-air-pp-case-for-apple-iphone-x-transparent-blue-1.jpg" alt="" onClick={this.displayProduct}/>
  
  <div class="card-body">
      <h5>iphone 7</h5>
  </div>
</div>
<div class="card" id="c1">
<img className="showimg" src="https://th.bing.com/th/id/OIP.QWEdqbBWDIdjQA6RHonUaQHaE8?pid=Api&rs=1" alt="" onClick={this.displayProduct1}/>
  <div class="card-body">
      <h5>Samsung M31</h5>
  </div>
</div>
<div class="card" id="c1">
<img className="showimg" src="https://www.droidafrica.net/wp-content/uploads/2020/04/Nokia-5.3-image-Specs-and-price-in-Nigeria-.jpg" alt="" onClick={this.displayProduct2}/>
  <div class="card-body">
      <h5>Nokia 5.3</h5>
  </div>
</div>
<div class="card" id="c1">
<img className="showimg" src="https://th.bing.com/th/id/OIP.l7yLXa8T3A2SmJQF3NPYpQHaE_?pid=Api&rs=1" alt="" onClick={this.displayProduct3}/>
  <div class="card-body">
      <h5>Vivo V20 Pro </h5>
  </div>
</div>
</div>


          </div>
          </div>
      )
  }
}

class Child extends React.Component{
  render(){
      return(
          <div>
             <div className="container">
              <div id="c2" className="card col-md-6">
              <img className="card-img-top" src="https://ukeyy.com/wp-content/uploads/2018/02/melkco-air-pp-case-for-apple-iphone-x-transparent-blue-1.jpg" alt="" />
               <div className="card-body">
               <h4 className="card-title">iphone 7 </h4>
               <p className="card-text">
                   Color: Blue <br/>
                   RAM: 4GB <br/>
                   Storage:256Gb<br/>
                    </p>
          </div>
          </div>
             </div>
          </div>
         
      )
  }
}
class Child1 extends React.Component{
  render(){
      return(
          <div>
             <div className="container">
              <div id="c2" className="card col-md-6">
              <img className="card-img-top" src="https://th.bing.com/th/id/OIP.QWEdqbBWDIdjQA6RHonUaQHaE8?pid=Api&rs=1" alt="" />
               <div className="card-body">
               <h4 className="card-title">Samsung M31</h4>
               <p className="card-text">
                   Color: BLUE & BLACK <br/>
                   RAM: 6GB <br/>
                   Storage:64GB<br/>
                    </p>
          </div>
          </div>
             </div>
          </div>
         
      )
  }
}
class Child2 extends React.Component{
  render(){
      return(
          <div>
             <div className="container">
              <div id="c2" className="card col-md-6">
              <img className="card-img-top" src="https://www.droidafrica.net/wp-content/uploads/2020/04/Nokia-5.3-image-Specs-and-price-in-Nigeria-.jpg" alt="" />
               <div className="card-body">
               <h4 className="card-title">Nokia 5.3</h4>
               <p className="card-text">
                   Color:Sand <br/>
                   RAM: 6GB <br/>
                   Storage:128GB<br/>
                    </p>
          </div>
          </div>
             </div>
          </div>
         
      )
  }
}
class Child3 extends React.Component{
  render(){
      return(
          <div>
             <div className="container">
              <div id="c2" className="card col-md-6">
              <img className="card-img-top" src="https://th.bing.com/th/id/OIP.l7yLXa8T3A2SmJQF3NPYpQHaE_?pid=Api&rs=1" alt="" />
               <div className="card-body">
               <h4 className="card-title">Vivo V20</h4>
               <p className="card-text">
                   Color: BLACK <br/>
                   RAM: 8GB <br/>
                   Storage:64GB<br/>
                    </p>
          </div>
          </div>
             </div>
          </div>
         
      )
  }
}


























