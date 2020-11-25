import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom'


export default function Login() {
    return (
        <div>
           <nav class="navbar navbar-light bg-info">
                <span class="navbar-brand mb-0 h1">Mobile's World</span>
            </nav>
            <h1>Login Here</h1>
            <form id="lform" name="validform" onsubmit="return validatePassword()">
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="enter email" required/>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" name="pasword1" placeholder="enter password" required/>
            </div>
            <Link to="/Show"><button type="submit" class="btn btn-dark" required>Login</button></Link>
          </form>
        </div>
    )
}

