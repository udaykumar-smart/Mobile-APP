import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom' 

export default function Home() {
    return (
        <div>
             <nav class="navbar navbar-light bg-info">
                <span class="navbar-brand mb-0 h1">Smart World</span>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item1 active">
                        <Link class="nav-link" to="login">Login<span class="sr-only">(current)</span></Link>
                    </li>
                </ul>
            </nav>
            <h1 id="home">Welcome to Smart World</h1>
            <p id="hpara">Mobile has become a very basic need for people all over the world. Everyone uses a smartphone, even small kids are obsessed with it.
                 Mobile has become an entertainment medium more than its basic use which is to connect with others. Interest in mobile phones and the number of mobile phone brands entering the Indian market has steadily risen over the last decade. 
                </p>
           <div className="card" style={{width: "23rem"}}>
                <img src="https://ukeyy.com/wp-content/uploads/2018/02/melkco-air-pp-case-for-apple-iphone-x-transparent-blue-1.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                <p style={{color:"fuchsia"}} class="card-text"><b>Apple</b><br/>website: WWW.apple.com</p>
            </div>
            </div>
            <div className="card" style={{width: "23rem"}}>
                <img src="https://th.bing.com/th/id/OIP.QWEdqbBWDIdjQA6RHonUaQHaE8?pid=Api&rs=1" class="card-img-top" alt="..."/>
                <div class="card-body">
                <p style={{color:"blue"}} class="card-text"><b>Samsung</b><br/>website: WWW.samsung.com</p>
            </div>
            </div>
            <div className="card" style={{width: "23rem"}}>
                <img src="https://assets.mspimages.in/wp-content/uploads/2020/03/nokia-5.3-features-and-specifications-1.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                <p style={{color:"crimson"}} class="card-text"><b>Nokia</b><br/>website: WWW.nokia.com</p>
            </div>
            </div>
            <div className="card" style={{width: "23rem"}}>
                <img src="https://th.bing.com/th/id/OIP.Gt_D-7EajLeaD-YfRjQ2DAHaFS?pid=Api&rs=1" class="card-img-top" alt="..."/>
                <div class="card-body">
                <p style={{color:"darkblue"}} class="card-text"><b>One+</b><br/>website: WWW.oneplus.com</p>
            </div>
            </div>
            <div className="card" style={{width: "23rem"}}>
                <img src="https://th.bing.com/th/id/OIP.l7yLXa8T3A2SmJQF3NPYpQHaE_?pid=Api&rs=1" class="card-img-top" alt="..."/>
                <div class="card-body" >
                <p style={{color:"grey"}} class="card-text"><b>Vivo</b><br/>website: WWW.vivo.com </p>
            </div>
            </div>
            <div className="card" style={{width: "23rem"}}>
                <img src="https://images.fonearena.com/blog/wp-content/uploads/2019/05/OPPO-K3-1.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                <p style={{color:"red"}} class="card-text"><b>Oppo</b> <br/> website: WWW.oppo.com</p>
            </div>
            </div>
        </div>
    )
}
