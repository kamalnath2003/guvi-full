import React from 'react'
import { Link } from 'react-router-dom'


function Nav() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-light px-5">
  <div class="container-fluid">
    <a class="navbar-brand " href="/">GUVI</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " style={{marginLeft:''}} id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item"><Link to={'/'}><a class="nav-link active" aria-current="page" href="#">Home</a></Link>
          
        </li>
        <li class="nav-item"><Link to={'/login'}><a class="nav-link">Login</a></Link>
          
          
        </li>
        <li class="nav-item"><Link to={'/signup'}><a class="nav-link" >Register</a>
          </Link>
          
        </li>

      </ul>

    </div>
  </div>
</nav>
      
    </div>
  )
}

export default Nav
